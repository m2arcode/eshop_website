// =============================================================
//  PRODUCT DATA  —  edit this file to add / change products
//  (Later you just tell Claude what to change, or edit here.)
//
//  Each product:
//    id        unique slug used in the URL  (/product/<id>)
//    name      display name
//    category  one of: tshirt | hoodie | suit | shorts
//    price     number (USD)
//    colors    array of { name, hex }
//    sizes     array of strings
//    swatch    background color used for the placeholder image block
//    desc      short product description
//    badge     optional small label (e.g. "NEW", "BEST SELLER")
// =============================================================

export const categories = [
  { id: 'tshirt', name: 'T-Shirts', tagline: 'Heavyweight cotton. Boxy fit.' },
  { id: 'hoodie', name: 'Hoodies',  tagline: 'Brushed fleece. Oversized.' },
  { id: 'suit',   name: 'Suits',    tagline: 'Tailored with an edge.' },
  { id: 'shorts', name: 'Shorts',   tagline: 'Built for the heat.' },
];

export const products = [
  // ---- T-SHIRTS ----
  {
    id: 'static-box-tee',
    name: 'STATIC Box Tee',
    category: 'tshirt',
    price: 48,
    colors: [{ name: 'Black', hex: '#0a0a0a' }, { name: 'Bone', hex: '#e7e3d8' }],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    swatch: '#1c1c1c',
    desc: '240gsm heavyweight cotton with a boxy, dropped-shoulder cut. Screen-printed back graphic, ribbed crew neck that holds its shape wash after wash.',
    badge: 'BEST SELLER',
  },
  {
    id: 'acid-wash-tee',
    name: 'ACID Wash Tee',
    category: 'tshirt',
    price: 52,
    colors: [{ name: 'Washed Grey', hex: '#6b6b6b' }, { name: 'Faded Olive', hex: '#5c5b3e' }],
    sizes: ['S', 'M', 'L', 'XL'],
    swatch: '#3a3a3a',
    desc: 'Garment-dyed and acid-washed for a one-of-one finish. No two pieces look identical.',
    badge: 'NEW',
  },
  {
    id: 'core-pocket-tee',
    name: 'CORE Pocket Tee',
    category: 'tshirt',
    price: 42,
    colors: [{ name: 'White', hex: '#f4f4f1' }, { name: 'Black', hex: '#0a0a0a' }],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    swatch: '#2b2b2b',
    desc: 'The everyday essential. Mid-weight cotton, chest pocket, slightly relaxed through the body.',
  },

  // ---- HOODIES ----
  {
    id: 'vault-hoodie',
    name: 'VAULT Heavy Hoodie',
    category: 'hoodie',
    price: 98,
    colors: [{ name: 'Charcoal', hex: '#2c2c2c' }, { name: 'Bone', hex: '#e7e3d8' }],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    swatch: '#222222',
    desc: '480gsm brushed-back fleece. Oversized hood, kangaroo pocket, ribbed cuffs. The one you live in all winter.',
    badge: 'BEST SELLER',
  },
  {
    id: 'shadow-zip-hoodie',
    name: 'SHADOW Zip Hoodie',
    category: 'hoodie',
    price: 110,
    colors: [{ name: 'Black', hex: '#0a0a0a' }, { name: 'Slate', hex: '#41474d' }],
    sizes: ['S', 'M', 'L', 'XL'],
    swatch: '#1a1a1a',
    desc: 'Full-zip with a high funnel neck and YKK hardware. Clean, no-logo front for a stealth look.',
    badge: 'NEW',
  },

  // ---- SUITS ----
  {
    id: 'monolith-suit',
    name: 'MONOLITH Relaxed Suit',
    category: 'suit',
    price: 320,
    colors: [{ name: 'Jet Black', hex: '#0a0a0a' }, { name: 'Charcoal', hex: '#33373b' }],
    sizes: ['S', 'M', 'L', 'XL'],
    swatch: '#15171a',
    desc: 'A relaxed two-piece cut for movement. Unstructured shoulder, wide pleated trouser. Tailoring that works with a tee underneath, not against it.',
    badge: 'SET',
  },
  {
    id: 'after-hours-blazer',
    name: 'AFTER HOURS Blazer',
    category: 'suit',
    price: 195,
    colors: [{ name: 'Black', hex: '#0a0a0a' }, { name: 'Deep Navy', hex: '#1b2434' }],
    sizes: ['S', 'M', 'L', 'XL'],
    swatch: '#101521',
    desc: 'Single-breasted, double-vented blazer with a soft drape. Wear it open over a hoodie or buttoned for the night.',
  },

  // ---- SHORTS ----
  {
    id: 'grid-cargo-short',
    name: 'GRID Cargo Short',
    category: 'shorts',
    price: 72,
    colors: [{ name: 'Black', hex: '#0a0a0a' }, { name: 'Stone', hex: '#a59c88' }],
    sizes: ['28', '30', '32', '34', '36'],
    swatch: '#2e2e28',
    desc: 'Utility cargo cut just above the knee. Six pockets, adjustable waist tabs, ripstop fabric.',
    badge: 'NEW',
  },
  {
    id: 'court-mesh-short',
    name: 'COURT Mesh Short',
    category: 'shorts',
    price: 54,
    colors: [{ name: 'Black', hex: '#0a0a0a' }, { name: 'Acid', hex: '#d4ff00' }],
    sizes: ['S', 'M', 'L', 'XL'],
    swatch: '#242424',
    desc: 'Breathable double-layer mesh with an elastic drawcord waist. Built for the heat and the court.',
  },
];

// helpers
export function getProductsByCategory(cat) {
  return products.filter((p) => p.category === cat);
}
export function getCategory(id) {
  return categories.find((c) => c.id === id);
}
