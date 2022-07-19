import { Layout } from "../components/Layout"
import type { ReactElement } from "react"
import type { NextPageWithLayout } from "./_app"

const Dashboard: NextPageWithLayout = () => {
  return (
    <div className="skjema-konteiner">
      <h1>Her er dashboard</h1>
      <p>det er ganske dashing</p>
      <p>...ihvertfall så blir det snart det</p>
    </div>
  )
}

Dashboard.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}
// TODO !erLeder -> redirect til /pages/ikkeLeder

export default Dashboard
