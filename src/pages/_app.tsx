import Head from "next/head"
import { useState } from "react"
import { Bruker, BrukerContext } from "../contexts"
import type { NextPage } from "next"
import type { ReactElement, ReactNode } from "react"
import type { AppProps } from "next/app"
import "../styles/globals.css"

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const [bruker, setBruker] = useState<Bruker | null>(null)

  return (
    <BrukerContext.Provider
      value={{ bruker, oppdaterBruker: (_bruker) => setBruker(_bruker) }}
    >
      <Head>
        <title>Bemanningsbehov</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </BrukerContext.Provider>
  )
}

export default MyApp
