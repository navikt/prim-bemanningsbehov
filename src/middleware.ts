import { NextResponse } from "next/server"
import appProperties from "../src/lib/appProperties"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const {
    headers,
    nextUrl: { basePath, pathname },
    url,
  } = request
  const token = headers.get("authorization")

  // TODO valider token
  const tokenErGyldig = token

  if (!tokenErGyldig) {
    console.log("\t--- TOKEN INVALID, REDIRECT TO LOGIN ---")
    console.log("url\t", url)
    console.log("basePath\t", basePath)
    console.log("pathname\t", pathname)
    console.log("auth header\t", token)
    return NextResponse.redirect(new URL(appProperties.hjemUrl + "/oauth2/login"))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard"],
}
