import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { storePayment } from '@/lib/paymentStore';

export async function POST(request: NextRequest) {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      serviceId,
      serviceName,
      amount,
      gst,
      customerName,
      customerEmail,
      customerPhone,
      city,
      propertyType
    } = await request.json();

    const key_secret = process.env.RAZORPAY_KEY_SECRET || 'ubMDCK97Ntf8Z4rqOzqvXeoq';
    const body = razorpay_order_id + '|' + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac('sha256', key_secret)
      .update(body)
      .digest('hex');

    const isAuthentic = expectedSignature === razorpay_signature;

    if (isAuthentic) {
      // Calculate total
      const gstAmount = (amount * gst) / 100;
      const total = amount + gstAmount;

      // Create payment data
      const paymentData = {
        id: razorpay_payment_id,
        orderId: razorpay_order_id,
        paymentId: razorpay_payment_id,
        signature: razorpay_signature,
        serviceId,
        serviceName,
        amount,
        gst: gstAmount,
        total,
        customerName,
        customerEmail,
        customerPhone,
        city,
        propertyType,
        status: 'completed',
        createdAt: new Date().toISOString()
      };

      // Store payment data
      storePayment(razorpay_payment_id, paymentData);

      console.log('Payment verified and stored:', paymentData);

      return NextResponse.json({
        success: true,
        message: 'Payment verified successfully',
        paymentId: razorpay_payment_id,
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
