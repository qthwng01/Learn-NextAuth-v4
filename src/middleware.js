import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'

export async function middleware(req) {
  const token = await getToken({ req })
  const isAuth = !!token
  const isAuthPage = req.nextUrl.pathname.startsWith('/login') || req.nextUrl.pathname.startsWith('/signin')
  if (isAuthPage) {
    if (isAuth) {
      return NextResponse.redirect(new URL('/home', req.url))
    }
    return null
  }
  if (!isAuth) {
    let from = req.nextUrl.pathname
    if (req.nextUrl.search) {
      from += req.nextUrl.search
    }
    return NextResponse.redirect(new URL(`/signin?callbackUrl=${encodeURIComponent(from)}`, req.url))
  }
}

export const config = {
  matcher: ['/home', '/signin'],
}
