import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const env = process.env.NODE_ENV
  const {
    headers,
    nextUrl: { basePath, pathname },
    url,
  } = request
  const token = headers.get("authorization")

  console.log("\t--- Hello from middleware ---")
  console.log("url\t", url)
  console.log("basePath\t", basePath)
  console.log("pathname\t", pathname)
  console.log("auth header\t", token)

  // TODO valider token
  const tokenErGyldig = token

  if (!tokenErGyldig) {
    console.log("\t--- TOKEN INVALID, SHOULD REDIRECT ---")
    // return NextResponse.redirect(new URL(basePath))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard", "/foo", "/bar"],
}
