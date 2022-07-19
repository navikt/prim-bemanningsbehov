import Head from "next/head";
import type { AppProps } from "next/app"
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import "../styles/globals.css"

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <>
      <Head>
        <title>Bemanningsbehov</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </>
  )
}

export default MyApp
