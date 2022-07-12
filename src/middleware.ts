import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/api/")) {
    const timestamp = Date.now().toLocaleString("nb-NO")
    console.log(`${timestamp}\t--- Received request ---`)
    console.log("pathname: ", request.nextUrl.pathname)
    for (const pair in request.headers.entries()) {
      console.log(pair[0], " ", pair[1])
    }
  }

  return NextResponse.next()
}
