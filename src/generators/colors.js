const log = console.log;

export const colorScale = (theme = {}) => {
    let colors = "";
    Object.keys(theme)
        .map((x) => x)
        .forEach((c) => {
            ["", "Alpha", "Light", "Dark", "Lightest", "Darkest"].forEach((s) => {
                colors += `.${c}${s} { color: var(--${c}${s}); }`;
                colors += `.hover-${c}${s}:hover { color: var(--${c}${s}); }`;
                colors += `.b--${c}${s} { border-color: var(--${c}${s}); }`;
                colors += `.bg-${c}${s} { background-color: var(--${c}${s}); }`;
                colors += `.b--hover-${c}${s}:hover, .b--hover-${c}${s}:active { border-color: var(--${c}${s}); }`;
                colors += `.bg-hover-${c}${s}:hover, .bg-hover-${c}${s}:active { background-color: var(--${c}${s}); }`;
            });
        });
    return colors;
};

export const grayScale = (steps = 5, start = 0) => {
    let grayScaleColors = "";
    for (let x = start; x <= 100; x += steps) {
        const o = x / 100;
        grayScaleColors += `.black${x} { color: rgba(0,0,0, ${o}) }`;
        grayScaleColors += `.hover-black${x}:hover { color: rgba(0,0,0, ${o}) }`;
        grayScaleColors += `.bg-black${x} { background-color: rgba(0,0,0, ${o}) }`;
        grayScaleColors += `.b--black${x} { border-color: rgba(0,0,0, ${o}) }`;
        grayScaleColors += `.bg-hover-black${x}:hover,.bg-hover-black${x}:active { background-color: rgba(0,0,0, ${o}) }`;
        grayScaleColors += `.white${x} { color: rgba(255,255,255, ${o}) }`;
        grayScaleColors += `.hover-white${x}:hover { color: rgba(255,255,255, ${o}) }`;
        grayScaleColors += `.bg-white${x} { background-color: rgba(255,255,255, ${o}) }`;
        grayScaleColors += `.b--white${x} { border-color: rgba(255,255,255, ${o}) }`;
        grayScaleColors += `.bg-hover-white${x}:hover,.bg-hover-white${x}:active { background-color: rgba(255,255,255, ${o}) }`;
    }
    return grayScaleColors;
};

export default {
    grayScale,
    colorScale
};
