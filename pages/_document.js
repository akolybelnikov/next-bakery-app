import Document, { Head, Main, NextScript } from "next/document"

class CustomDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <html lang="ru">
                <Head>
                    <meta charSet="utf-8" />
                    <link rel="shortcut icon" href="/static/favicon.ico" />
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Raleway:300,400,500,700,900"
                    />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                    <meta name="og:theme_color" content="#52082d" />
                    <meta name="og:url" content="https://vsebulochki.com" />
                    <meta
                        name="og:keywords"
                        content="bread, bakery, cakes, wedding, celebration, milk, sweets, cupcakes"
                    />
                    <meta
                        property="og:image"
                        content="/static/manifest/icons/icon-512x512.png"
                    />
                    <link
                        rel="manifest"
                        href="/static/manifest/manifest.json"
                    />
                    <link
                        rel="shortcut icon"
                        href="/static/favicon.ico"
                        type="image/x-icon"
                    />
                </Head>
                <body className="custom_body">
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}

export default CustomDocument
