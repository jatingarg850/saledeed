# Doorstep Booking Modal - Razorpay Integration

## Overview
Converted the "Book via WhatsApp" modal to a fully functional Razorpay payment system for doorstep consultation bookings.

## Files Created/Modified

### New Components
1. **components/DoorstepBookingModal.tsx**
   - New modal component with Razorpay integration
   - Form fields: Name, Email, Phone, City, Property Type
   - Validates all inputs before payment
   - Handles Razorpay payment flow
   - Redirects to bill page on successful payment

### New API Routes
1. **app/api/verify-payment/route.ts** (Updated)
   - Verifies Razorpay payment signature
   - Stores payment data with customer details
   - Returns payment ID for bill page redirect

2. **app/api/payment/[paymentId]/route.ts** (New)
   - GET endpoint to fetch payment details
   - Used by bill page to display payment information

3. **app/api/generate-bill-pdf/route.ts** (New)
   - Generates HTML bill content
   - Can be extended to generate actual PDF

### New Pages
1. **app/bill/[paymentId]/page.tsx**
   - Displays payment confirmation and bill
   - Shows customer details, service info, and pricing breakdown
   - Print and PDF download functionality
   - Thank you message with next steps

### Utilities
1. **lib/paymentStore.ts**
   - In-memory payment storage
   - Functions: storePayment(), getPayment(), getAllPayments()
   - Replace with database in production

### Updated Files
1. **app/page.tsx**
   - Imported DoorstepBookingModal component
   - Replaced old WhatsApp modal with new Razorpay modal

## Features

### Doorstep Booking Modal
- **Form Validation**: All fields required before payment
- **Razorpay Integration**: Secure payment processing
- **Customer Details**: Captures name, email, phone, city, property type
- **Error Handling**: User-friendly error messages
- **Loading States**: Visual feedback during payment processing

### Bill Page
- **Payment Confirmation**: Success message and payment details
- **Customer Information**: Name, email, phone, city
- **Service Details**: Service name and property type
- **Pricing Breakdown**: Amount, GST, and total
- **Actions**: Print, Download PDF, Back to Home
- **Responsive Design**: Works on all devices

### Payment Flow
1. User clicks "Get Doorstep Advice" button
2. Modal opens with form
3. User fills in details and clicks "Book via Razorpay"
4. Razorpay payment gateway opens
5. User completes payment
6. Payment verified on backend
7. Redirects to bill page with confirmation
8. User can print or download bill

## Pricing
- **Doorstep Consultation**: ₹1,999 (All inclusive, no GST)
- Service ID: `doorstep`

## Environment Variables Required
```
NEXT_PUBLIC_RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret
```

## Data Storage
Currently uses in-memory storage. For production:
- Replace `lib/paymentStore.ts` with database calls
- Update API routes to use database
- Implement proper payment persistence

## Next Steps
1. Set up database for payment storage
2. Add email notifications for payment confirmation
3. Implement admin dashboard to view all bookings
4. Add SMS notifications
5. Implement actual PDF generation (use puppeteer or similar)
6. Add payment refund functionality
7. Implement payment retry logic

## Testing
1. Click "Get Doorstep Advice" button on home page
2. Fill in all form fields
3. Click "Book via Razorpay"
4. Complete test payment in Razorpay modal
5. Verify redirect to bill page
6. Test print and download functionality
