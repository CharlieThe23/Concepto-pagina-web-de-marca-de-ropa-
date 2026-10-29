/**
 * NULL.SYS — Centralized Drop & Pricing Configuration (V4 Master Specification)
 * 
 * Collection: SEE YOU IN VOID — AUTUMN / WINTER 2026
 * Line: KAMI TO TO NO MI
 * 
 * Strict Configuration Rules:
 * - Jersey: 45,00 € (priceEUR: 45, priceConfigured: true)
 * - Puffer: 72,00 € (priceEUR: 72, priceConfigured: true)
 * - Tracksuit (Chándal Técnico): PRICE TO BE ANNOUNCED (Pre-Order)
 * - Denim (Baggy Washed Denim): PRICE TO BE ANNOUNCED
 * - Beanie (Kami Accessories): PRICE TO BE ANNOUNCED
 * - Sudadera: PRICE REVEAL SOON (Archive)
 * - releaseStatus: 'coming_soon'
 * - checkoutEnabled: false
 */

export type ReleaseStatus = 'coming_soon' | 'live_drop' | 'sold_out';

export interface ProductPriceConfig {
  priceEUR: number | null;
  priceConfigured: boolean;
  currency: 'EUR';
  statusLabel?: string;
  isPreOrder?: boolean;
}

export interface CollectionConfig {
  season: 'AUTUMN / WINTER 2026';
  title: 'SEE YOU IN VOID';
  graphicLine: 'KAMI TO TO NO MI';
  japaneseQuote: 'Kami yo, watashi wo misutenaide.';
  quoteTranslation: '"God, please don\'t abandon me."';
  claim: 'Built for those who exist beyond the system.';
  editorialText: '"Not made to fit in. Made to stand apart."';
  limitedEdition: boolean;
  releaseStatus: ReleaseStatus;
  checkoutEnabled: boolean;
  products: {
    jersey: ProductPriceConfig;
    tracksuit: ProductPriceConfig;
    denim: ProductPriceConfig;
    beanie: ProductPriceConfig;
    puffer: ProductPriceConfig;
    sudadera: ProductPriceConfig;
  };
}

export type DropCollectionConfig = CollectionConfig;

export const CURRENT_COLLECTION_CONFIG: CollectionConfig = {
  season: 'AUTUMN / WINTER 2026',
  title: 'SEE YOU IN VOID',
  graphicLine: 'KAMI TO TO NO MI',
  japaneseQuote: 'Kami yo, watashi wo misutenaide.',
  quoteTranslation: '"God, please don\'t abandon me."',
  claim: 'Built for those who exist beyond the system.',
  editorialText: '"Not made to fit in. Made to stand apart."',
  limitedEdition: true,
  releaseStatus: 'coming_soon',
  checkoutEnabled: false,
  products: {
    jersey: {
      priceEUR: 45,
      priceConfigured: true,
      currency: 'EUR',
      statusLabel: 'STAR PRODUCT'
    },
    tracksuit: {
      priceEUR: null,
      priceConfigured: false,
      currency: 'EUR',
      statusLabel: 'LIMITED DROP — PRE-ORDER',
      isPreOrder: true
    },
    denim: {
      priceEUR: null,
      priceConfigured: false,
      currency: 'EUR',
      statusLabel: 'LIMITED DROP'
    },
    beanie: {
      priceEUR: null,
      priceConfigured: false,
      currency: 'EUR',
      statusLabel: 'ACCESSORIES DROP'
    },
    puffer: {
      priceEUR: 72,
      priceConfigured: true,
      currency: 'EUR',
      statusLabel: 'ARCHIVE RELEASE'
    },
    sudadera: {
      priceEUR: null,
      priceConfigured: false,
      currency: 'EUR',
      statusLabel: 'ARCHIVE CAPSULE'
    }
  }
};

// Backward compatibility alias
export const DROP_001_CONFIG = {
  collection: 'DROP_001',
  limitedEdition: true,
  releaseStatus: CURRENT_COLLECTION_CONFIG.releaseStatus,
  checkoutEnabled: CURRENT_COLLECTION_CONFIG.checkoutEnabled,
  reference: 'NS-D001-001',
  title: 'Anime Distressed Knit',
  category: 'Oversized Knitwear',
  sizes: ['1 (S-M)', '2 (L-XL)'],
  products: CURRENT_COLLECTION_CONFIG.products
};

/**
 * Format price according to exact brand specification:
 * - When configured: e.g. "45,00 €" or "72,00 €"
 * - When null/unconfigured: "PRICE TO BE ANNOUNCED" or custom status
 */
export function formatProductPrice(config: ProductPriceConfig): string {
  if (config.priceConfigured && config.priceEUR !== null) {
    return `${config.priceEUR.toFixed(2).replace('.', ',')} €`;
  }
  return 'PRICE TO BE ANNOUNCED';
}

