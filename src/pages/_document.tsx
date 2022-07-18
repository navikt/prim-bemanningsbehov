import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="nb">
      <Head>
        <meta name="description" content="Bemanningsbehov, en del av Plattform for Rekruttering og Intern Mobilitet" />
        <meta charSet="UTF-8" />
        <link
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=optional"
          rel="stylesheet"
        />
        <link
          rel="icon"
          href="/Users/B160814/Workspace/prim-bemanningsbehov/public/images/favicon.ico"
        />
      </Head>
      <body>
      <Main />
      <NextScript />
      </body>
    </Html>
  )
}
