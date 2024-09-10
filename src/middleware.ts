import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL("/dashboard", request.url));

  //   if (request.nextUrl.pathname.startsWith("/")) {
  //     return NextResponse.rewrite(new URL("/dashboard", request.url));
  //   }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/",
  //   matcher: "/about/:path*",
};
