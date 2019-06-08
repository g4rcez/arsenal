import mediaQuery from "./media-query";

const suffixilize = (s, text) => (!!s ? `${text}-${s}` : text);

const generateWidth = (steps = 1, start = 0) => {
    let media = {};
    Object.entries(mediaQuery).forEach((el) => {
        const [_, options] = el;
        const { suffix } = options;
        media[suffix] = [];
        for (let i = start; i <= 100; i += steps) {
            media[suffix] = [...media[suffix], `${suffixilize(suffix, `.w${i}`)} { width: ${i}%; }`];
        }
        media[suffix] = [
            ...media[suffix],
            `${suffixilize(suffix, `.wThird`)} { width: 33.33333%; }`,
            `${suffixilize(suffix, `.wTwoThird`)} { width: 66.66667%; }`,
            `${suffixilize(suffix, `.wAuto`)} { width: auto; }`
        ];
    }, {});
    return media;
};

export default generateWidth;
