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
                    <link rel="manifest" href="/static/manifest/manifest.json" />
                    <link rel="shortcut icon" href="/static/favicon.ico" type="image/x-icon"></link>
                </Head>
                <body className="custom_body">
                    <Main />
                    <NextScript />
                    <style jsx global>
                        {`
                            .custom_body {
                                color: #331507;
                            }
                            @media all and (min-width: 600px) {
                                html {
                                    padding-top: 4.25rem;
                                }
                            }
                            @media all and (max-width: 599px) {
                                html {
                                    padding-top: 2.25rem;
                                }
                            }
                        `}
                    </style>
                </body>
            </html>
        )
    }
}

export default CustomDocument
