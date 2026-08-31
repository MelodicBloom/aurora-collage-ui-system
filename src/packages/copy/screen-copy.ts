export const screenCopy = {
  brand: { name: 'AURORA', tagline: 'Design system for quiet commerce, tactile storytelling, and editorial interfaces.' },
  home: { eyebrow: 'Curated Objects', title: 'Discover beauty in simplicity.', body: 'A tactile interface system for mindful retail, journals, lookbooks, and slow-commerce experiences.', cta: 'Explore Now' },
  collection: { title: 'Modern Essentials', body: 'Timeless pieces, thoughtfully made.', cta: 'Shop Collection' },
  journal: { title: 'Journal', body: 'Stories, ideas, and inspiration.', cta: 'Explore Articles' },
  productScreen: { title: 'Ceramic Vase', price: '$48.00', body: 'Handcrafted ceramic vase, perfect for any space.', cta: 'Add to Cart' },
  productUI: { colors: 'Colors', size: 'Size', quantity: 'Quantity', addToCart: 'Add to Cart', addedToCart: 'Added to cart', outOfStock: 'Out of stock', lowStock: 'Only a few left', description: 'Description', details: 'Details', care: 'Care Instructions', shipping: 'Shipping & Returns', reviews: 'Reviews', related: 'You may also like' },
  values: { title: 'Mindful Choices', body: 'Sustainable materials. Ethical production. Beautiful results.' },
  cart: { title: 'Cart', empty: 'Your cart is empty.', cta: 'Continue Shopping', checkout: 'Checkout', subtotal: 'Subtotal', shipping: 'Shipping', total: 'Total' },
  typography: { title: 'Typography', subtitle: 'Type specimen and usage guidelines', displayFamily: 'Playfair Display', bodyFamily: 'Inter', monoFamily: 'IBM Plex Mono', sampleText: 'The quick brown fox jumps over the lazy dog.', alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', alphabetLower: 'abcdefghijklmnopqrstuvwxyz', numerals: '0123456789', punctuation: '.,;:!?()[]' },
  designSystem: { title: 'Design System Overview', subtitle: 'Complete token reference and component library', sections: { colors: 'Color Palette', typography: 'Typography', uiElements: 'UI Elements', formFields: 'Form Fields', icons: 'Icons', textures: 'Textures & Materials', collage: 'Collage Elements' } },
  navigation: { home: 'Home', collection: 'Collection', journal: 'Journal', cart: 'Cart' },
  footer: { copyright: '\u00a9 2026 AURORA. All rights reserved.', privacy: 'Privacy', terms: 'Terms', accessibility: 'Accessibility' },
  common: { loading: 'Loading...', error: 'Something went wrong.', retry: 'Try again', close: 'Close', back: 'Back', continue: 'Continue', submit: 'Submit', search: 'Search', filter: 'Filter', sort: 'Sort', clear: 'Clear', apply: 'Apply', reset: 'Reset' },
} as const;

export type ScreenCopy = typeof screenCopy;
