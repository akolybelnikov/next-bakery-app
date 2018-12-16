import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <html>
                <Head />
                <body className='custom_body'>
                    <Main />
                    <NextScript />
                    <style jsx global>
                        {`
                            .custom_body {
                                color: #331507;
                            }
                        `}
                    </style>
                </body>
            </html>
        )
    }
}
