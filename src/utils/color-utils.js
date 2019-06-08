const expand = (hex = "") => {
    if (hex.length === 7) {
        return hex;
    }
    return hex
        .slice(hex.startsWith("#") ? 1 : 0)
        .split("")
        .map((x) => x + x)
        .join("");
};

const rgb2hex = (rgb) => {
    rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
    return rgb && rgb.length === 4
        ? "#" +
              ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) +
              ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) +
              ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2)
        : "";
};

const trailLeadingHashTag = (hex = "") => hex.replace(/^[#]+/, "");

export default function HexExpand(hex = "") {
    if (hex.match(/^#/) && hex.length === 7) {
        return hex;
    }
    if (hex.length === 4) {
        return trailLeadingHashTag(expand(hex));
    }
    if (hex.match(/^rgba/)) {
        return trailLeadingHashTag(expand(rgb2hex(hex)));
    }
    throw "Provide a valid color value";
}




