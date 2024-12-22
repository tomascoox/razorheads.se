import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64')

  const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.googletagmanager.com https://*.google-analytics.com https://open.spotify.com;
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    img-src 'self' https://*.cloudinary.com data: blob: https://*.google-analytics.com https://*.doubleclick.net;
    font-src 'self' https://fonts.gstatic.com data:;
    connect-src 'self' https://*.google-analytics.com https://*.doubleclick.net https://*.cloudinary.com;
    frame-src 'self' https://open.spotify.com;
    media-src 'self' https://*.cloudinary.com;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'self';
    worker-src 'self' blob:;
    manifest-src 'self';
  `.replace(/\s+/g, ' ').trim()

  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-nonce', nonce)

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })

  response.headers.set(
    'Content-Security-Policy',
    cspHeader
  )

  response.headers.set(
    'Link',
    [
      '<https://res.cloudinary.com>; rel="preconnect"; crossorigin="anonymous"',
      '<https://fonts.gstatic.com>; rel="preconnect"; crossorigin="anonymous"',
      '<https://www.googletagmanager.com>; rel="preconnect"; crossorigin="anonymous"',
      '</razorheads-favicon.png>; rel="preload"; as="image"; type="image/png"',
      '<https://res.cloudinary.com/dj3cyyuz7/image/upload/f_auto,q_auto,w_570/v1734717848/razorheads-logo-white_xepvsy.png>; rel="preload"; as="image"',
      '<https://res.cloudinary.com/dj3cyyuz7/image/upload/f_auto,q_auto,w_500/v1734685679/TIK_POWER_album_cover_znk9eh.jpg>; rel="preload"; as="image"',
    ].join(', ')
  )

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    {
      source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
} 