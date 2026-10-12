import { NextRequest, NextResponse } from "next/server";
import { sessionCookie, verifySessionToken } from "@/lib/auth/session";

export default async function proxy(req: NextRequest) {
  const url = req.nextUrl.pathname;

  //allowed paths
  const allowedPaths = ["/admin/login"];
  if (allowedPaths.includes(url)) {
    return NextResponse.next();
  }

  const token = req.cookies.get(sessionCookie)?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }

  try {
    await verifySessionToken(token);

    //check if the user is an admin
    const { payload } = await verifySessionToken(token);
    console.log("User role from token:", payload.role); // Log the role from the token
    if (payload.role !== "admin") {
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }
    return NextResponse.next();
  } catch {
    const response = NextResponse.redirect(new URL("/admin/login", req.url));
    response.cookies.delete(sessionCookie);
    return response;
  }
}

export const config = {
  matcher: ["/admin/:path*"],
};
