import rootVars from "./generators/rootVars";
import { colorNormalizer, colorVariation } from "./generators/color-variation";
import { colorScale, grayScale } from "./generators/colors";
import generateWidth from "./generators/width-by-media-query";
import mediaQuery, { mediaQueryRemap } from "./generators/media-query";
import { readFile } from "./utils/read-file";
import { writeFileSync } from "fs";

const varPrefix = "--";

const theme = {
    primary: "rgba(0, 0, 0)",
    secondary: "#fff",
    danger: "#f00"
};

const normalizedTheme = colorVariation(colorNormalizer(theme));
const varLines = rootVars(varPrefix, normalizedTheme);
const rootCssString = varLines.reduce((acc, el) => (acc += `${el};`), "");

// File write
const ROOT_CSS = `:root {${rootCssString}}`;
const SKINS_BG_TEXT_BORDER_CLASSES = colorScale(normalizedTheme);
const SKINS_BG_TEXT_BORDER_CLASSES_BW = grayScale(5, 5);
const WIDTH_CSS_WITH_SUFFIX_MEDIA_QUERY = generateWidth(5, 5);
const writeWidth = () => {
    let str = "";
    Object.entries(WIDTH_CSS_WITH_SUFFIX_MEDIA_QUERY).forEach((x) => {
        const [name, values] = x;
        const remap = mediaQueryRemap[name];
        const { query } = mediaQuery[remap];
        const internalCSS = values.reduce((acc, el) => (acc += el), "");
        str += `${query}{${internalCSS}}`;
    });
    return str;
};
const NORMALIZE_CSS = readFile(`./src/css/normalize.css`);
const POINTERS_CSS = readFile(`./src/css/pointers.css`);
const TACHYONS_CSS = readFile(`./src/css/tachyons.css`);
const finalCSS =
    NORMALIZE_CSS +
    POINTERS_CSS +
    TACHYONS_CSS +
    ROOT_CSS +
    SKINS_BG_TEXT_BORDER_CLASSES +
    SKINS_BG_TEXT_BORDER_CLASSES_BW +
    writeWidth();

writeFileSync("./build.css", finalCSS);
