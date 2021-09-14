import Document, { Html, Head, Main, NextScript } from 'next/document'
import configs from '@/etc/configs'

import { GA_TRACKING_ID } from '../libs/gtag'

const isProduction = process.env.NODE_ENV === 'production'

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <>
            <title>Carlota Sounds - A reflection of sounds</title>
            {configs.meta.map((meta, index) => (
              <meta {...meta} key={index} />
            ))}
            {configs.favicons.map((meta, index) => (
              <link {...meta} key={index} />
            ))}
          </>
          {/* enable analytics script only for production isProduction && */}
          {isProduction ? (
            <>
              <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
              <script
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
                }}
              />
            </>
          ) : (
            ''
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
