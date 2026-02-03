import { NextRequest, NextResponse, userAgent } from 'next/server'
 
export function proxy(request: NextRequest) {
  const url = request.nextUrl
  const { device, isBot } = userAgent(request)
 
  const viewport = isBot ? 'desktop' : device.type || 'desktop'
 
  url.searchParams.set('viewport', viewport)
  
  return NextResponse.rewrite(url)
}