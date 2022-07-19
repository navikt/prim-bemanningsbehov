import Router from "next/router"
import Image from "next/image";
import Illustrasjon from "../../public/images/innlogging-illustrasjon.svg"
import { Button } from "@navikt/ds-react"
import type { NextPage } from "next"
import styles from "./index.module.css"

const Hjem: NextPage = () => {
  return (
    <>
      <div className={`skjema-konteiner ${styles["login-konteiner"]}`}>
        <h1>Velkommen til Bemanningsbehov!</h1>
        <p>
          Bemanningsbehov er en del av Plattform for rekruttering og intern
          mobilitet
        </p>
        <Button onClick={() => Router.push("/oauth2/login")}>LOGG INN</Button>
        <Image
          src={Illustrasjon}
          alt="Illustrasjon av to saksbehandlere"
          width={762}
          height={198}
        />
      </div>
    </>
  )
}

export default Hjem
