// =============================================================
//  SITE CONFIG  —  one place to control brand + tracking + links
//  Fill these in when you have them. Empty = feature stays off.
// =============================================================

export const site = {
  brand: 'VANTA',
  email: 'modafocus@gmail.com',

  // --- Alibaba store / inquiry link ---
  // Paste your Alibaba International Station store or product URL here.
  // When empty, the "Enquire on Alibaba" button points to the contact page instead.
  alibabaUrl: '',

  // --- Analytics / Ads tracking (fill when you have them) ---
  // Google Analytics 4 measurement id, looks like "G-XXXXXXXXXX"
  ga4Id: '',
  // Google Ads conversion id, looks like "AW-XXXXXXXXXX"
  googleAdsId: '',

  // --- Formspree contact form id (see contact page) ---
  formspreeId: 'your-form-id',
};

// Where the Alibaba button should go (store link if set, else contact page)
export function alibabaHref(base = '') {
  return site.alibabaUrl && site.alibabaUrl.trim() ? site.alibabaUrl : `${base}/contact`;
}
