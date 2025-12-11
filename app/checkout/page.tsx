import { Suspense } from 'react'
import CheckoutContent from '../../components/CheckoutContent'

export const dynamic = 'force-dynamic'

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CheckoutContent />
    </Suspense>
  )
}
