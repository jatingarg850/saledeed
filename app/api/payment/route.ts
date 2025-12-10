import { NextRequest, NextResponse } from 'next/server';
import Razorpay from 'razorpay';

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID || 'rzp_live_RpPxJh8unD7uHu',
  key_secret: process.env.RAZORPAY_KEY_SECRET || 'ubMDCK97Ntf8Z4rqOzqvXeoq'
});

export async function POST(request: NextRequest) {
  try {
    const { amount, currency, receipt, notes } = await request.json();

    const options = {
      amount: Math.round(amount * 100),
      currency: currency || 'INR',
      receipt: receipt,
      notes: notes
    };

    const order = await razorpay.orders.create(options);

    return NextResponse.json({
      success: true,
      orderId: order.id,
      amount: order.amount,
      currency: order.currency
    });
  } catch (error) {
    console.error('Payment error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create order' },
      { status: 500 }
    );
  }
}
