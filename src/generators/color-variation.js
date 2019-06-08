import polished from "polished";
import HexExpand from "../utils/color-utils";
const { darken, lighten, transparentize } = polished;
export const colorVariation = (theme) => {
    const colors = Object.keys(theme).reduce((acc, x) => {
        const color = theme[x];
        if (!`${color}`.startsWith("#")) {
            return acc;
        }
        const name = x;
        return {
            ...acc,
            [name]: color,
            [`${name}Alpha`]: transparentize(0.5, color),
            [`${name}Light`]: lighten(0.2, color),
            [`${name}Lightest`]: lighten(0.6, color),
            [`${name}Dark`]: darken(0.2, color),
            [`${name}Darkest`]: darken(0.6, color)
        };
    }, {});
    return colors;
};

export const colorNormalizer = (theme) => {
    return Object.entries(theme).reduce((acc, el) => {
        const [name, color] = el;
        return { ...acc, [name]: `#${HexExpand(color)}` };
    }, {});
};





export default { colorVariation, colorNormalizer };
