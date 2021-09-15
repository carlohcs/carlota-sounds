import Document, { Html, Head, Main, NextScript } from 'next/document'
import configs from '@/etc/configs'

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <>
            <title>A reflection of sounds | Carlota Sounds</title>

            {configs.meta.map((meta, index) => (
              <meta {...meta} key={index} />
            ))}
            {configs.favicons.map((meta, index) => (
              <link {...meta} key={index} />
            ))}
          </>
          {/* enable analytics script only for production isProduction && */}

          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${configs.metrics.GA}`} />
            <script
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${configs.metrics.GA}', {
              page_path: window.location.pathname,
              debug_mode: ${!configs.isProduction},
            });
          `,
              }}
            />
          </>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
