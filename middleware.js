import { NextResponse } from 'next/server';

const PASSWORD = 'double';
const COOKIE   = 'lis-preview';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Always allow the login page and its API route through
  if (pathname.startsWith('/login') || pathname.startsWith('/api/login')) {
    return NextResponse.next();
  }

  // If the cookie matches, allow through
  const cookie = request.cookies.get(COOKIE);
  if (cookie?.value === PASSWORD) return NextResponse.next();

  // Otherwise redirect to login, remembering where they came from
  const url = request.nextUrl.clone();
  url.pathname = '/login';
  url.searchParams.set('from', pathname);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon\\.ico|images).*)'],
};
