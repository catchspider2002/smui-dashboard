module.exports = {
    theme: {
        extend: {}
    },
    variants: {},
    plugins: [
        function({ addVariant, e }) {
            addVariant("before", ({ modifySelectors, separator }) => {
                modifySelectors(({ className }) => {
                    return `.${e(`before${separator}${className}`)}::before`;
                });
            });
            addVariant("after", ({ modifySelectors, separator }) => {
                modifySelectors(({ className }) => {
                    return `.${e(`after${separator}${className}`)}::after`;
                });
            });
        }
    ]
};
