import React, { ReactElement, useContext } from "react"
import { Dropdown, Header } from "@navikt/ds-react-internal"
import { System } from "@navikt/ds-icons"
import styles from "./Layout.module.css"
import { useRouter } from "next/router"
import { BrukerContext } from "../../contexts"

const Layout = ({ children }: { children: ReactElement }) => {
  const router = useRouter()
  const { bruker } = useContext(BrukerContext)

  return (
    <>
      <Header>
        <Header.Title href="/" aria-label="Hjemnavigasjon">
          Hjem
        </Header.Title>
        <span className={styles["space-filler"]} />
        <Dropdown>
          <Header.Button as={Dropdown.Toggle} className="ml-auto">
            <System
              style={{ fontSize: "1.5rem" }}
              title="Systemer og oppslagsverk"
            />
          </Header.Button>
          <Dropdown.Menu>
            <Dropdown.Menu.GroupedList>
              <Dropdown.Menu.GroupedList.Heading>
                Systemer og oppslagsverk
              </Dropdown.Menu.GroupedList.Heading>
              <Dropdown.Menu.GroupedList.Item>
                A.Inntekt
              </Dropdown.Menu.GroupedList.Item>
            </Dropdown.Menu.GroupedList>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Header.UserButton
            as={Dropdown.Toggle}
            name={bruker?.navn ?? "NN"}
            description="Enhet: Skien"
            className="ml-auto"
          />
          <Dropdown.Menu>
            <Dropdown.Menu.List>
              <Dropdown.Menu.List.Item
                onClick={() => router.push("/oauth2/logout")}
              >
                Logg ut
              </Dropdown.Menu.List.Item>
            </Dropdown.Menu.List>
          </Dropdown.Menu>
        </Dropdown>
      </Header>
      <div className={styles["bemanningsbehov-banner"]}>
        <div className={styles["banner-innhold"]}>Bemanningsbehov</div>
      </div>
      <main>{children}</main>
    </>
  )
}

export default Layout
