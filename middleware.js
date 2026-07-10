import { NextResponse } from 'next/server';

const PASSWORD = 'doubled';
const COOKIE   = 'lis-preview';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/login') || pathname.startsWith('/api/login')) {
    return NextResponse.next();
  }

  const cookie = request.cookies.get(COOKIE);
  if (cookie?.value === PASSWORD) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = '/login';
  url.searchParams.set('from', pathname);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon\\.ico|images).*)'],
};
