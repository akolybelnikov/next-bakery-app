import Document from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { ThemeProvider } from 'styled-components'

const theme = {
  primary: '#52082d',
  info: '#331507',
  success: '#eaccb2',
  primaryShadow: 'rgba(82, 8, 45, 0.3)',
  infoShadow: 'rgba(51, 21, 7, 0.3)',
  successShadow: 'rgba(234, 204, 178, 0.3)'
}

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()

    const originalRenderPage = ctx.renderPage
    ctx.renderPage = () => originalRenderPage({
      enhanceApp: App => props => sheet.collectStyles(<ThemeProvider theme={theme}><App {...props} /></ThemeProvider>)
    })

    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps, styles: [...initialProps.styles, ...sheet.getStyleElement()] }
  }
}
