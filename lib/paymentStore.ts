// In-memory payment storage (replace with database in production)
export const paymentStore: Record<string, any> = {};

export function storePayment(paymentId: string, paymentData: any) {
  paymentStore[paymentId] = paymentData;
}

export function getPayment(paymentId: string) {
  return paymentStore[paymentId];
}

export function getAllPayments() {
  return paymentStore;
}
