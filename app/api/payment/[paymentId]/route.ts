import { NextRequest, NextResponse } from 'next/server'
import { getPayment } from '@/lib/paymentStore'

export async function GET(
  request: NextRequest,
  { params }: { params: { paymentId: string } }
) {
  try {
    const paymentId = params.paymentId

    // Fetch from payment store
    const payment = getPayment(paymentId)

    if (!payment) {
      return NextResponse.json(
        { error: 'Payment not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(payment)
  } catch (error) {
    console.error('Error fetching payment:', error)
    return NextResponse.json(
      { error: 'Failed to fetch payment' },
      { status: 500 }
    )
  }
}
