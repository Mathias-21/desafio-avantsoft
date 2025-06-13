import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const url = request.nextUrl;

  if (!token && url.pathname !== '/login' && url.pathname !== '/register') {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (token && (url.pathname === '/login' || url.pathname === '/register')) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}
export const config = {
  matcher: ['/', '/dashboard', '/login', '/register'],
};
