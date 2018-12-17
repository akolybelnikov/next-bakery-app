const FontFaceObserver = require("fontfaceobserver")

const Fonts = async () => {
    const raleway = new FontFaceObserver("Raleway")
    await raleway.load()
}

export default Fonts
