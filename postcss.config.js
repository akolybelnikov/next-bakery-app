const postcssCustomProperties = require("postcss-custom-properties")

module.exports = {
    plugins: [
        postcssCustomProperties({
            preserve: false
        }),
        require("postcss-css-variables")
    ]
}
