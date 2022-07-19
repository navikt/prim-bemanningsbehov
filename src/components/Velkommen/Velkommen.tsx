import { Button } from "@navikt/ds-react"
import Router from "next/router"
import Image from "next/image"
import Illustrasjon from "../../../public/images/innlogging-illustrasjon.svg"
import styles from "./velkommen.module.css"

function Velkommen() {
  return (
    <div className={styles["login-konteiner"]}>
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
  )
}

export default Velkommen
