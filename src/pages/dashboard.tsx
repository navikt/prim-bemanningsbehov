import { useContext } from "react"
import { Layout } from "../components/Layout"
import { type Bruker, BrukerContext } from "../contexts"
import type { GetServerSideProps, InferGetServerSidePropsType } from "next"
import { verifiserToken } from "../lib/auth"

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const token = req.headers["authorization"]!.split(" ")[1]

  const { payload } = await verifiserToken(token)
  console.log(payload)
  // TODO !erLeder -> redirect til /pages/ikkeLeder
  const parsetBrukerFraToken: Bruker = {
    navn: "Bruk Brukersen",
    ident: "B12345",
    rolle: "LEDER"
  }
  return {
    props: {
      parsetBrukerFraToken
    }
  }
}

const Dashboard = ({
  parsetBrukerFraToken
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { bruker, oppdaterBruker } = useContext(BrukerContext)

  if (!bruker) {
    oppdaterBruker(parsetBrukerFraToken)
  }

  return (
    <Layout>
      <div className="skjema-konteiner">
        <h1>Her er dashboard</h1>
        <p>det er ganske dashing</p>
        <p>...ihvertfall så blir det snart det</p>
      </div>
    </Layout>
  )
}

export default Dashboard
