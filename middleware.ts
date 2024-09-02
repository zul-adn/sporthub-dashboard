import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import {
  AUTH_COOKIE,
  getAuthCookie,
  REFRESH_COOKIE,
} from "@/utils/auth-cookie";

const unauthenticatedRoutes = ["/login"];

export async function middleware(request: NextRequest) {
  const authenticated = !!cookies().get(AUTH_COOKIE)?.value;

  if (!authenticated && cookies().get(REFRESH_COOKIE)) {
    const refreshRes = await fetch(`${process.env.API_URL}/auth/refresh`, {
      headers: {
        Cookie: cookies().toString(),
      },
      method: "POST",
    });
    const authCookies = getAuthCookie(refreshRes);
    if (authCookies?.accessToken) {
      const response = NextResponse.redirect(request.url);
      response.cookies.set(authCookies.accessToken);
      return response;
    }
  }

  if (
    !authenticated &&
    !unauthenticatedRoutes.some((route) =>
      request.nextUrl.pathname.startsWith(route)
    )
  ) {
    return Response.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|assets|favicon.ico).*)"],
};