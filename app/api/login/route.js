import { NextResponse } from 'next/server';

const PASSWORD = 'doubled';
const COOKIE   = 'lis-preview';

export async function POST(request) {
  const form = await request.formData();
  const password = (form.get('password') ?? '').trim();
  const from     = form.get('from') || '/';

  if (password === PASSWORD) {
    const res = NextResponse.redirect(new URL(from, request.url));
    res.cookies.set(COOKIE, PASSWORD, {
      httpOnly: true,
      secure:   process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge:   60 * 60 * 24 * 7,
      path:     '/',
    });
    return res;
  }

  const url = new URL('/login', request.url);
  url.searchParams.set('from', from);
  url.searchParams.set('error', '1');
  return NextResponse.redirect(url);
}
