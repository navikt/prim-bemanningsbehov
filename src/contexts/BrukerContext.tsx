import { createContext } from "react"

export type Bruker = {
  navn: string
  ident: string
  rolle?: "HR_1" | "HR_2" | "LEDER" | "IKKE_LEDER"
  ledere?: string[]
}

interface BrukerContextInterface {
  bruker: Bruker | null
  oppdaterBruker: (bruker: Bruker) => void
}

const BrukerContext = createContext<BrukerContextInterface>({
  bruker: null,
  oppdaterBruker: () => {}
})

export default BrukerContext
