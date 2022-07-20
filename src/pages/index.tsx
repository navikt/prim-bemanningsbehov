import { Velkommen } from "../components/Velkommen"
import { GetServerSideProps } from "next"

const Hjem = () => {
  return (
    <>
      <Velkommen />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  if (req.headers["authorization"]) {
    // token validation håndteres i middleware
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}

export default Hjem
