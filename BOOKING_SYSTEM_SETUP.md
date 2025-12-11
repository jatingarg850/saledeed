# Service Booking System with Razorpay Integration

## Overview
This document describes the complete booking system implementation with Razorpay payment integration, bill generation, and admin dashboard.

## Features Implemented

### 1. Service Booking Modal (`components/ServiceBookingModal.tsx`)
- Collects customer information: Name, Email, Phone, Address
- Displays price breakdown (Base Price + GST)
- Form validation for all fields
- Integrates with Razorpay for payment processing
- Shows loading state during payment processing
- Error handling and user feedback

### 2. Services Page Updates (`app/services/page.tsx`)
- All "Book Now" buttons now open the booking modal
- Modal displays correct service name and pricing
- Doorstep consultation: ₹1,999 (No GST)
- All other services: Base price + 18% GST
- Custom pricing for Builder Buyer Agreement

### 3. Razorpay Payment Integration
- **Create Order** (`app/api/razorpay/create-order/route.ts`)
  - Creates Razorpay order with correct amount
  - Includes service description and receipt ID

- **Verify Payment** (`app/api/razorpay/verify-payment/route.ts`)
  - Verifies payment signature
  - Saves booking details
  - Generates and sends bill to customer email
  - Sends notification to admin email
  - Stores booking in admin system

### 4. Bill Generation
- Professional HTML bill template
- Includes:
  - Customer details
  - Service details
  - Payment information
  - Price breakdown (Base + GST)
  - Booking ID and Payment ID
  - Company branding

### 5. Admin Dashboard (`app/admin/bookings/page.tsx`)
- View all service bookings
- Display customer information
- Show payment details
- Sort by date (newest first)
- Responsive table design

### 6. API Endpoints

#### POST `/api/razorpay/create-order`
Creates a Razorpay order
```json
{
  "amount": 11879,
  "currency": "INR",
  "description": "Service Name",
  "receipt": "service_timestamp"
}
```

#### POST `/api/razorpay/verify-payment`
Verifies payment and creates booking
```json
{
  "razorpay_order_id": "order_id",
  "razorpay_payment_id": "payment_id",
  "razorpay_signature": "signature",
  "service": "Service Name",
  "amount": 11879,
  "customerName": "John Doe",
  "customerEmail": "john@example.com",
  "customerPhone": "9876543210",
  "customerAddress": "Address",
  "basePrice": 9999,
  "gstAmount": 1880
}
```

#### GET `/api/admin/bookings`
Fetches all bookings (admin only)

#### POST `/api/admin/bookings`
Saves a new booking

## Environment Variables Required

Add these to your `.env` file:

```env
# Razorpay
RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret
NEXT_PUBLIC_RAZORPAY_KEY_ID=your_key_id

# Email Configuration
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
ADMIN_EMAIL=admin@saledeed.com

# App URL (for production)
NEXT_PUBLIC_APP_URL=https://yourdomain.com
```

### Email Setup (Gmail)
1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password: https://myaccount.google.com/apppasswords
3. Use the generated password as `EMAIL_PASSWORD`

## User Flow

1. **User clicks "Book Now"** on any service card
2. **Modal opens** with service details and pricing
3. **User fills form** with name, email, phone, address
4. **User clicks "Pay"** button
5. **Razorpay checkout** opens
6. **User completes payment**
7. **Payment verified** on backend
8. **Booking saved** to admin system
9. **Bill email sent** to customer
10. **Admin notification** sent to admin email
11. **Success message** shown to user
12. **Modal closes** and form resets

## Admin Access

Access bookings at: `/admin/bookings`

Features:
- View all bookings in a table
- See customer details
- View payment information
- Sort by date
- Check booking status

## Pricing Structure

### Services with Fixed Pricing
- Doorstep Consultation: ₹1,999 (No GST)
- Property Verification: ₹9,999 + 18% GST = ₹11,879
- Sale Deed Registration: ₹17,999 + 18% GST = ₹21,279
- Agent Assistance: ₹9,999 + 18% GST = ₹11,879
- Gift Deed: ₹13,999 + 18% GST = ₹16,539
- Relinquishment Deed: ₹11,999 + 18% GST = ₹14,179
- Will: ₹7,999 + 18% GST = ₹9,459
- General Power of Attorney: ₹7,999 + 18% GST = ₹9,459
- Partition Deed: ₹13,999 + 18% GST = ₹16,539
- Agreement to Sell: ₹13,999 + 18% GST = ₹16,539
- Rent Agreement: ₹3,999 + 18% GST = ₹4,739
- Mutation: ₹27,999 + 18% GST = ₹33,059

### Custom Pricing
- Builder Buyer Agreement: Contact for quote

## Database Integration (Future)

Currently uses in-memory storage. To integrate with a database:

1. Replace in-memory arrays in:
   - `app/api/razorpay/verify-payment/route.ts`
   - `app/api/admin/bookings/route.ts`

2. Add database calls for:
   - Saving bookings
   - Fetching bookings
   - Updating booking status

## Security Considerations

1. **Payment Verification**: Signature verification ensures payment authenticity
2. **Email Validation**: Form validates email format
3. **Phone Validation**: Ensures 10-digit phone number
4. **Admin Access**: Should add authentication (TODO)
5. **HTTPS**: Use HTTPS in production
6. **Environment Variables**: Never commit sensitive data

## Testing

### Test Payment
Use Razorpay test credentials:
- Key ID: `rzp_test_xxxxx`
- Key Secret: `xxxxx`

Test card: 4111 1111 1111 1111

### Test Email
Use a test email service or Gmail test account

## Troubleshooting

### Payment not processing
- Check Razorpay credentials in `.env`
- Verify amount is in paise (multiply by 100)
- Check browser console for errors

### Email not sending
- Verify Gmail app password is correct
- Check 2FA is enabled on Gmail
- Verify `EMAIL_USER` and `EMAIL_PASSWORD` in `.env`
- Check spam folder

### Booking not saving
- Check admin API endpoint is accessible
- Verify booking data structure
- Check browser network tab for API errors

## Future Enhancements

1. Database integration (MongoDB, PostgreSQL)
2. Admin authentication
3. Booking status tracking
4. Email templates customization
5. SMS notifications
6. Booking cancellation/refund
7. Invoice PDF generation
8. Payment history
9. Customer portal
10. Analytics dashboard
