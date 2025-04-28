import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { decrypt } from './app/_lib/session'

// 1. Specify protected and public routes
const protectedRoutes = [
  '/user/profile',
  '/user/read-list',
  '/user/watch-list'
]
const publicRoutes = [
  '/sign-in',
  '/sign-up',
  '/',
  '/anime',
  '/manga'
]

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  // 2. Decrypt the session from the cookie
  const cookie = (await cookies()).get('session')?.value;
  const session = await decrypt(cookie);

  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicAuthPage = path === '/sign-in' || path === '/sign-up';

  // 3. Redirect to /sign-in if trying to access protected page without login
  if (isProtectedRoute && !session?.userId) {
    return NextResponse.redirect(new URL('/sign-in', req.nextUrl));
  }

  // 4. Redirect to /user/profile if logged in and trying to visit sign-in or sign-up
  if (isPublicAuthPage && session?.userId) {
    return NextResponse.redirect(new URL('/user/profile', req.nextUrl));
  }

  return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}