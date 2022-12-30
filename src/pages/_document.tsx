import { Html, Head, Main, NextScript } from 'next/document'
import { getCssText } from '../styles'

export default function Document() {
  return (
    <Html lang="en">
      <Head >
      <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
