// Paradise Nursery product catalog.
// Images are local SVG illustrations so the app works fully offline.
export const categories = [
  {
    id: 'air-purifying',
    name: 'Air-Purifying Plants',
    tagline: 'Breathe cleaner air, naturally',
  },
  {
    id: 'aromatic-fragrant',
    name: 'Aromatic & Fragrant Plants',
    tagline: 'Natural perfume for your home',
  },
  {
    id: 'low-maintenance',
    name: 'Low-Maintenance Plants',
    tagline: 'Greenery with almost no effort',
  },
  {
    id: 'flowering',
    name: 'Flowering Plants',
    tagline: 'Color and joy, all year round',
  },
];

export const products = [
  // ---------- Air-Purifying ----------
  {
    id: 1,
    name: 'Snake Plant',
    category: 'air-purifying',
    description:
      'Architectural, sword-shaped leaves with striking yellow edges. Filters toxins and releases oxygen at night.',
    price: 24.99,
    image: '/img/snake-plant.svg',
  },
  {
    id: 2,
    name: 'Peace Lily',
    category: 'air-purifying',
    description:
      'Glossy dark leaves crowned with elegant white spathes. A classic humidity-loving air purifier.',
    price: 29.99,
    image: '/img/peace-lily.svg',
  },
  {
    id: 3,
    name: 'Golden Pothos',
    category: 'air-purifying',
    description:
      'Trailing vines splashed with gold. Thrives in almost any light and is easy to propagate.',
    price: 19.99,
    image: '/img/pothos.svg',
  },
  // ---------- Aromatic & Fragrant ----------
  {
    id: 4,
    name: 'Lavender',
    category: 'aromatic-fragrant',
    description:
      'Silvery foliage and perfumed purple spikes. Calming scent, loved by pollinators.',
    price: 16.99,
    image: '/img/lavender.svg',
  },
  {
    id: 5,
    name: 'Gardenia',
    category: 'aromatic-fragrant',
    description:
      'Deep green leaves and creamy white blooms with an unforgettable sweet fragrance.',
    price: 32.99,
    image: '/img/gardenia.svg',
  },
  {
    id: 6,
    name: 'Jasmine',
    category: 'aromatic-fragrant',
    description:
      'Delicate starry white flowers that fill warm evenings with their classic perfume.',
    price: 21.99,
    image: '/img/jasmine.svg',
  },
  // ---------- Low-Maintenance ----------
  {
    id: 7,
    name: 'ZZ Plant',
    category: 'low-maintenance',
    description:
      'Waxy deep-green leaflets on sculptural stems. Tolerates drought and low light with ease.',
    price: 27.99,
    image: '/img/zz-plant.svg',
  },
  {
    id: 8,
    name: 'Aloe Vera',
    category: 'low-maintenance',
    description:
      'Succulent rosette with soothing gel-filled leaves. Needs water only every few weeks.',
    price: 14.99,
    image: '/img/aloe.svg',
  },
  {
    id: 9,
    name: 'Monstera Deliciosa',
    category: 'low-maintenance',
    description:
      'The iconic Swiss cheese plant. Fast-growing tropical drama for bright corners.',
    price: 39.99,
    image: '/img/monstera.svg',
  },
  // ---------- Flowering ----------
  {
    id: 10,
    name: 'Orchid Phalaenopsis',
    category: 'flowering',
    description:
      'Exotic moth-orchid blooms lasting up to three months. A living bouquet.',
    price: 44.99,
    image: '/img/orchid.svg',
  },
  {
    id: 11,
    name: 'Hibiscus',
    category: 'flowering',
    description:
      'Tropical shrub with huge trumpet blooms in fiery red. Perfect for sunny patios.',
    price: 34.99,
    image: '/img/hibiscus.svg',
  },
  {
    id: 12,
    name: 'African Violet',
    category: 'flowering',
    description:
      'Compact velvet leaves and constant clusters of purple flowers for windowsills.',
    price: 18.99,
    image: '/img/african-violet.svg',
  },
];

export default products;
