import { NextRequest, NextResponse } from 'next/server'

// In-memory storage (replace with database in production)
let bookings: any[] = []

export async function GET(request: NextRequest) {
  try {
    // TODO: Add authentication check here
    // const authHeader = request.headers.get('authorization')
    // if (!authHeader || !isValidAdmin(authHeader)) {
    //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    // }

    return NextResponse.json({
      success: true,
      bookings: bookings.sort((a, b) => 
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      )
    })
  } catch (error) {
    console.error('Error fetching bookings:', error)
    return NextResponse.json(
      { error: 'Failed to fetch bookings' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const booking = await request.json()
    bookings.push(booking)
    
    return NextResponse.json({
      success: true,
      message: 'Booking saved',
      bookingId: booking.id
    })
  } catch (error) {
    console.error('Error saving booking:', error)
    return NextResponse.json(
      { error: 'Failed to save booking' },
      { status: 500 }
    )
  }
}
