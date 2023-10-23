export interface faqDataType {
  title: string,
  content: string,
  content2?: string,
  content3?: string,
}

export const faqData: faqDataType[] = [
  {
    title: 'What is your return policy?',
    content: 'You can return any unused or defective items by mail. Returns made within 30 days of receiving your items will be fully refunded. Returns made after 30 days of receiving your items will be refunded as an e-gift card. Please note, sale items will not be refunded.    '
  },
  {
    title: 'What are your delivery methods?',
    content: 'All items will be delivered by the courier stated in your confirmation email. Please note, we only use green business certified couriers. Once your items have shipped, you can track your order via the courier’s website.    '
  },
  {
    title: 'When will I receive my order?',
    content: 'Orders placed with standard shipping take 2 to 3 days to process.',
    content2: 'Orders placed with express shipping take 1 to 2 days to process.',
    content3: 'Please note: all orders are subject to potential delays.'
  },
  {
    title: 'Can I cancel an order?',
    content: 'Unfortunately, we are unable to cancel or modify an order once it has been placed. However, you can return items for a full refund within 30 days of receiving them.'
  },
  {
    title: 'Do you restock items?',
    content: 'Yes. Our products are hand-stitched, so we do not manufacture clothing in bulk orders. This means that items may come back into stock. To receive notifications on when items are back in stock, make sure to add them to your wish list.'
  },
  {
    title: 'How do I unsubscribe from newsletters?',
    content: 'Click the "Unsubscribe" button located at the bottom of every Pomplemoose email.'
  }
]