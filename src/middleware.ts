import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/api/")) {
    console.log("\t--- Received request ---")
    console.log("pathname: ", request.nextUrl.pathname)
    console.log("auth ", request.headers.get("authorization"))
  }

  return NextResponse.next()
}
