export const services = [
  {
    id: 'doorstep',
    name: 'Doorstep Consultation',
    price: 1999,
    gst: 0,
    description: '100% adjusted if you decide to buy any of our service after doorstep consultation',
    icon: 'home'
  },
  {
    id: 'property-verification',
    name: 'Property Detailed Verification',
    price: 9999,
    gst: 18,
    description: 'Complete property verification with legal checks',
    icon: 'check-circle'
  },
  {
    id: 'sale-deed-reg',
    name: 'Sale Deed Registration',
    price: 17999,
    gst: 18,
    description: 'With expert assistance and legal support',
    icon: 'file-text'
  },
  {
    id: 'agent-assistance',
    name: 'Agent Assistance',
    price: 9999,
    gst: 18,
    description: 'Document verification, registration + consultation call with expert property lawyer',
    icon: 'users'
  },
  {
    id: 'gift-deed',
    name: 'Gift Deed',
    price: 13999,
    gst: 18,
    description: 'With expert assistance',
    icon: 'gift'
  },
  {
    id: 'relinquishment-deed',
    name: 'Relinquishment Deed',
    price: 11999,
    gst: 18,
    description: 'With expert assistance',
    icon: 'file-text'
  },
  {
    id: 'will',
    name: 'Will',
    price: 7999,
    gst: 18,
    description: 'With expert assistance',
    icon: 'file-text'
  },
  {
    id: 'partition-deed',
    name: 'Partition Deed',
    price: 13999,
    gst: 18,
    description: 'With expert assistance',
    icon: 'file-text'
  },
  {
    id: 'gpa',
    name: 'General Power of Attorney',
    price: 7999,
    gst: 18,
    description: 'With expert assistance',
    icon: 'file-text'
  },
  {
    id: 'agreement-to-sell',
    name: 'Agreement To Sell',
    price: 13999,
    gst: 18,
    description: 'With expert assistance',
    icon: 'file-text'
  },
  {
    id: 'rent-agreement',
    name: 'Rent Agreement',
    price: 3999,
    gst: 18,
    description: 'With expert assistance',
    icon: 'file-text'
  },
  {
    id: 'mutation',
    name: 'Mutation',
    price: 27999,
    gst: 18,
    description: 'With expert assistance',
    icon: 'file-text'
  },
  {
    id: 'buyer-package',
    name: 'Buyer Package',
    price: 64999,
    gst: 18,
    description: 'Property Verification + Sale Deed Drafting & Registration + Mutation + Electricity & Water Bill Name Change',
    icon: 'shopping-bag'
  },
  {
    id: 'seller-package',
    name: 'Seller Package',
    price: 99000,
    gst: 18,
    description: 'NOC + Valuation Report',
    icon: 'shopping-bag'
  },
  {
    id: 'property-filming',
    name: 'Property Video Filming',
    price: 14999,
    gst: 18,
    description: 'For Boosting Sale',
    icon: 'video'
  },
  {
    id: 'vaastu-consultation',
    name: 'Vaastu Consultation',
    price: 49999,
    gst: 18,
    description: 'With Detailed Correction Advice',
    icon: 'home'
  },
  {
    id: 'nri-process',
    name: 'NRI Buy Sell Process',
    price: 99000,
    gst: 18,
    description: 'Complete NRI property transaction support',
    icon: 'globe'
  },
  {
    id: 'vip-deed',
    name: '👑 VIP Deed Registration',
    price: 159000,
    gst: 18,
    description: 'From The Comfort of Home',
    icon: 'crown'
  }
];

export const calculateTotal = (price: number, gst: number) => {
  const gstAmount = (price * gst) / 100;
  return price + gstAmount;
};
