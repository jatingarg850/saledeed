import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(request: NextRequest) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, userDetails } = await request.json();

    const key_secret = process.env.RAZORPAY_KEY_SECRET || 'ubMDCK97Ntf8Z4rqOzqvXeoq';
    const body = razorpay_order_id + '|' + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac('sha256', key_secret)
      .update(body)
      .digest('hex');

    const isAuthentic = expectedSignature === razorpay_signature;

    if (isAuthentic) {
      // Save payment to database (you'll need to set up a database)
      const paymentData = {
        orderId: razorpay_order_id,
        paymentId: razorpay_payment_id,
        signature: razorpay_signature,
        userDetails,
        timestamp: new Date(),
        status: 'completed'
      };

      // TODO: Save to database
      console.log('Payment verified:', paymentData);

      return NextResponse.json({
        success: true,
        message: 'Payment verified successfully',
        paymentData
      });
    } else {
      return NextResponse.json(
        { success: false, message: 'Payment verification failed' },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Verification error:', error);
    return NextResponse.json(
      { success: false, error: 'Verification failed' },
      { status: 500 }
    );
  }
}
