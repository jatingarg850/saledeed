import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const paymentData = await request.json()

    // Create HTML content for PDF
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>Invoice ${paymentData.paymentId}</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f5f5f5;
          }
          .container {
            max-width: 800px;
            margin: 0 auto;
            background-color: white;
            padding: 40px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
          .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 40px;
            border-bottom: 2px solid #d97706;
            padding-bottom: 20px;
          }
          .company-info h1 {
            margin: 0;
            color: #d97706;
            font-size: 28px;
          }
          .company-info p {
            margin: 5px 0;
            color: #666;
          }
          .invoice-info {
            text-align: right;
          }
          .invoice-info .label {
            color: #666;
            font-size: 12px;
          }
          .invoice-info .value {
            font-size: 18px;
            font-weight: bold;
            color: #333;
          }
          .success-message {
            background-color: #dcfce7;
            border: 2px solid #22c55e;
            border-radius: 8px;
            padding: 15px;
            margin-bottom: 30px;
            color: #166534;
          }
          .section {
            margin-bottom: 30px;
          }
          .section-title {
            font-size: 12px;
            font-weight: bold;
            color: #666;
            text-transform: uppercase;
            margin-bottom: 10px;
          }
          .bill-to, .invoice-details {
            display: inline-block;
            width: 48%;
            vertical-align: top;
          }
          .bill-to {
            margin-right: 4%;
          }
          .customer-name {
            font-weight: bold;
            font-size: 16px;
            margin-bottom: 5px;
          }
          .customer-detail {
            font-size: 14px;
            color: #666;
            margin-bottom: 3px;
          }
          .detail-row {
            display: flex;
            justify-content: space-between;
            font-size: 14px;
            margin-bottom: 8px;
          }
          .detail-label {
            color: #666;
          }
          .detail-value {
            font-weight: bold;
            color: #333;
          }
          .service-box {
            background-color: #f9fafb;
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            padding: 15px;
            display: flex;
            gap: 15px;
          }
          .service-icon {
            width: 50px;
            height: 50px;
            background-color: #fef3c7;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            flex-shrink: 0;
          }
          .service-info h3 {
            margin: 0;
            font-size: 16px;
            color: #333;
          }
          .service-info p {
            margin: 5px 0 0 0;
            font-size: 13px;
            color: #666;
          }
          .pricing-section {
            border-top: 1px solid #e5e7eb;
            padding-top: 20px;
          }
          .pricing-row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
            font-size: 14px;
          }
          .pricing-row.total {
            border-top: 1px solid #e5e7eb;
            padding-top: 10px;
            font-size: 18px;
            font-weight: bold;
            color: #d97706;
          }
          .thank-you {
            background-color: #dbeafe;
            border: 1px solid #93c5fd;
            border-radius: 8px;
            padding: 15px;
            margin-bottom: 30px;
            color: #1e40af;
            font-size: 14px;
          }
          .thank-you h3 {
            margin: 0 0 10px 0;
            font-size: 16px;
          }
          .footer {
            border-top: 1px solid #e5e7eb;
            padding-top: 20px;
            text-align: center;
            font-size: 12px;
            color: #666;
          }
          .footer p {
            margin: 5px 0;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="company-info">
              <h1>SaleDeed.com</h1>
              <p>Professional Property Services</p>
            </div>
            <div class="invoice-info">
              <div class="label">INVOICE</div>
              <div class="value">${paymentData.paymentId}</div>
            </div>
          </div>

          <div class="success-message">
            <strong>✓ Payment Successful!</strong><br>
            Thank you for your payment. Your booking has been confirmed.
          </div>

          <div class="section">
            <div style="display: flex; gap: 40px;">
              <div class="bill-to">
                <div class="section-title">Bill To</div>
                <div class="customer-name">${paymentData.customerName}</div>
                <div class="customer-detail">${paymentData.customerEmail}</div>
                <div class="customer-detail">${paymentData.customerPhone}</div>
                <div class="customer-detail">${paymentData.city}</div>
              </div>
              <div class="invoice-details">
                <div class="section-title">Invoice Details</div>
                <div class="detail-row">
                  <span class="detail-label">Invoice Date:</span>
                  <span class="detail-value">${new Date(paymentData.createdAt).toLocaleDateString('en-IN')}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Order ID:</span>
                  <span class="detail-value">${paymentData.orderId}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Status:</span>
                  <span class="detail-value" style="color: #22c55e;">Completed</span>
                </div>
              </div>
            </div>
          </div>

          <div class="section">
            <div class="section-title">Service Details</div>
            <div class="service-box">
              <div class="service-icon">🏠</div>
              <div class="service-info">
                <h3>${paymentData.serviceName}</h3>
                <p>Property Type: ${paymentData.propertyType}</p>
              </div>
            </div>
          </div>

          <div class="pricing-section">
            <div class="pricing-row">
              <span>Service Amount:</span>
              <span>₹${paymentData.amount.toLocaleString('en-IN')}</span>
            </div>
            ${paymentData.gst > 0 ? `
            <div class="pricing-row">
              <span>GST (18%):</span>
              <span>₹${paymentData.gst.toLocaleString('en-IN')}</span>
            </div>
            ` : ''}
            <div class="pricing-row total">
              <span>Total Amount Paid:</span>
              <span>₹${paymentData.total.toLocaleString('en-IN')}</span>
            </div>
          </div>

          <div class="thank-you">
            <h3>Thank You!</h3>
            <p>Our team will contact you shortly to schedule your doorstep consultation. We appreciate your business and look forward to assisting you with your property needs.</p>
          </div>

          <div class="footer">
            <p>SaleDeed.com - Delhi's #1 Property Documents & Real Estate Platform</p>
            <p>For support, contact us at support@saledeed.com or call 1800-XXX-XXXX</p>
          </div>
        </div>
      </body>
      </html>
    `

    // For now, return the HTML as a response
    // In production, you would use a library like puppeteer or html2pdf to generate actual PDF
    return new NextResponse(htmlContent, {
      headers: {
        'Content-Type': 'text/html',
        'Content-Disposition': `attachment; filename="bill_${paymentData.paymentId}.html"`
      }
    })
  } catch (error) {
    console.error('Error generating PDF:', error)
    return NextResponse.json(
      { error: 'Failed to generate PDF' },
      { status: 500 }
    )
  }
}
