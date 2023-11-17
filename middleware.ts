import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { KEYS } from './constants';

const protectedRoutes = ['/home'];

export default function middleware(req: NextRequest) {
  const authToken = cookies().get(KEYS.AUTH_TOKEN);

  if (!authToken && protectedRoutes.includes(req.nextUrl.pathname)) {
    const absoluteURL = new URL('/', req.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }

  return NextResponse.next(); // token varsa normal devam etmesi için
}
