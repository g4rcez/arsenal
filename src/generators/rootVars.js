const rootVars = (prefix, theme = {}) => {
    return Object.entries(theme).map((el) => {
        const [name, color] = el;
        return `${prefix}${name}: ${color}`;
    });
};

export default rootVars;
