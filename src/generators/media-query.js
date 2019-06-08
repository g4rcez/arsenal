const mediaQuery = {
    small: {
        suffix: "",
        query: "@media only screen and (min-width: 600px)"
    },
    medium: {
        suffix: "m",
        query: "@media only screen and (max-width: 600px)"
    },
    large: {
        suffix: "l",
        query: "@media only screen and (min-width: 992px)"
    },
    extraLarge: {
        suffix: "xl",
        query: "@media only screen and (min-width: 1200px)"
    }
};

export const mediaQueryRemap = {
    "": "small",
    m: "medium",
    l: "large",
    xl: "extraLarge"
};

export default mediaQuery;
