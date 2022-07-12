import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  console.log("\t--- Received request ---")
  console.log("pathname: ", request.nextUrl.pathname)
  console.log(request.headers)

  return NextResponse.next()
}

export const config = {
  matcher: "/api/debug",
}
