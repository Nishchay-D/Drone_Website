import { NextResponse } from 'next/server';

export function middleware(request) {
  const url = request.nextUrl.clone();
  
  // Check if the user is accessing one of the battery pages
  if (url.pathname.startsWith('/battery')) {
    // Extract the `id` from the query string
    const id = url.searchParams.get('id');

    // If `id` is missing, redirect to an error page or login page
    if (!id || id !== 'your-auth-id') {
      url.pathname = '/unauthorized'; // Redirect to unauthorized page
      return NextResponse.redirect(url);
    }
  }

  // Allow access if id is valid
  return NextResponse.next();
}

export const config = {
  matcher: ['/battery/:path*'], // Apply middleware to all battery pages
};
