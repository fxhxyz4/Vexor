export type Currency = 'UAH' | 'USD';

export type PricingTierId =
  'website' | 'mobileApp' | 'webPlatform' | 'productDesign' | 'automation' | 'support';

export interface PricingTier {
  id: PricingTierId;
  startingPrice: number | null;
  currency: Currency;
  displayMode: 'fromPrice' | 'customQuote';
}

// Local Ukrainian market pricing
export const pricingUAH: PricingTier[] = [
  { id: 'website', startingPrice: 12000, currency: 'UAH', displayMode: 'fromPrice' },
  { id: 'mobileApp', startingPrice: 85000, currency: 'UAH', displayMode: 'fromPrice' },
  { id: 'webPlatform', startingPrice: null, currency: 'UAH', displayMode: 'customQuote' },
  { id: 'productDesign', startingPrice: 15000, currency: 'UAH', displayMode: 'fromPrice' },
  { id: 'automation', startingPrice: 10000, currency: 'UAH', displayMode: 'fromPrice' },
  { id: 'support', startingPrice: 3000, currency: 'UAH', displayMode: 'fromPrice' },
];

export const pricingUSD: PricingTier[] = [
  { id: 'website', startingPrice: 900, currency: 'USD', displayMode: 'fromPrice' },
  { id: 'mobileApp', startingPrice: 7000, currency: 'USD', displayMode: 'fromPrice' },
  { id: 'webPlatform', startingPrice: null, currency: 'USD', displayMode: 'customQuote' },
  { id: 'productDesign', startingPrice: 1800, currency: 'USD', displayMode: 'fromPrice' },
  { id: 'automation', startingPrice: 1200, currency: 'USD', displayMode: 'fromPrice' },
  { id: 'support', startingPrice: 350, currency: 'USD', displayMode: 'fromPrice' },
];

export const budgetBrackets: Record<
  Currency,
  { value: string; label: { uk: string; en: string } }[]
> = {
  UAH: [
    { value: 'under_15k', label: { uk: 'до 15 000 грн', en: 'Under 15,000 UAH' } },
    { value: '15_40k', label: { uk: '15 000–40 000 грн', en: '15,000–40,000 UAH' } },
    { value: '40_100k', label: { uk: '40 000–100 000 грн', en: '40,000–100,000 UAH' } },
    { value: '100_300k', label: { uk: '100 000–300 000 грн', en: '100,000–300,000 UAH' } },
    { value: 'over_300k', label: { uk: '300 000+ грн', en: '300,000+ UAH' } },
  ],
  USD: [
    { value: 'under_1k', label: { uk: 'до $1 000', en: 'Under $1,000' } },
    { value: '1_3k', label: { uk: '$1 000–3 000', en: '$1,000–3,000' } },
    { value: '3_8k', label: { uk: '$3 000–8 000', en: '$3,000–8,000' } },
    { value: '8_25k', label: { uk: '$8 000–25 000', en: '$8,000–25,000' } },
    { value: 'over_25k', label: { uk: '$25 000+', en: '$25,000+' } },
  ],
};

export const getPricingByCurrency = (currency: Currency): PricingTier[] => {
  return currency === 'UAH' ? pricingUAH : pricingUSD;
};
