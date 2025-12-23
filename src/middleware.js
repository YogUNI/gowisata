import { NextResponse } from "next/server";

export function middleware() {
  // DEV MODE: lewati semua request
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};