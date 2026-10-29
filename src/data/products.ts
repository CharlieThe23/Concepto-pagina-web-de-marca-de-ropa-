import { Product } from '../types';
import { CURRENT_COLLECTION_CONFIG } from '../config/dropConfig';
import { IMAGE_REGISTRY } from '../config/imageRegistry';

export const STAR_PRODUCT: Product = {
  id: 'null-knit-001',
  code: 'NS-W26-JK01',
  title: 'NULL.SYS — Anime Distressed Knit',
  category: 'jerseys',
  categoryLabel: 'SEE YOU IN VOID // Oversized Knitwear',
  priceEUR: CURRENT_COLLECTION_CONFIG.products.jersey.priceEUR,
  priceConfigured: CURRENT_COLLECTION_CONFIG.products.jersey.priceConfigured,
  currency: 'EUR',
  description: 'El primer capítulo del universo NULL.SYS. Anime Distressed Knit combina una silueta oversized, un gráfico de inspiración anime y acabados desgastados que desafían las convenciones del streetwear. Una pieza pensada para quienes no siguen el sistema. DROP_001. Limited release.',
  features: [
    'Color negro.',
    'Estética oversized.',
    'Gráfico anime frontal.',
    'Tipografía NULL.SYS integrada.',
    'Elementos gráficos digitales y pixelados.',
    'Puños y bajo con acabado desgastado.',
    'Parte trasera lisa.'
  ],
  image: IMAGE_REGISTRY.CATALOG_JERSEY_CARD.filePath!,
  variants: [
    {
      id: 'black',
      name: 'Anime Distressed Knit - BLACK',
      colorCode: '#09090b',
      image: IMAGE_REGISTRY.CATALOG_JERSEY_CARD.filePath!
    },
    {
      id: 'red',
      name: 'Anime Distressed Knit - RED',
      colorCode: '#991b1b',
      image: IMAGE_REGISTRY.JERSEY_RED_VARIANT_VIEW.filePath!
    }
  ],
  gallery: [
    {
      id: 'gallery-jersey-updated',
      label: '01. Anime Distressed Knit - BLACK // Frontal y Dorsal (null_jersey_1)',
      src: IMAGE_REGISTRY.CATALOG_JERSEY_CARD.filePath!,
      alt: IMAGE_REGISTRY.CATALOG_JERSEY_CARD.altText,
      viewType: 'product-front'
    },
    {
      id: 'gallery-jersey-red-variant',
      label: '02. Anime Distressed Knit - RED // Gráfico Anime y Logo Rojo',
      src: IMAGE_REGISTRY.JERSEY_RED_VARIANT_VIEW.filePath!,
      alt: IMAGE_REGISTRY.JERSEY_RED_VARIANT_VIEW.altText,
      viewType: 'product-front'
    },
    {
      id: 'gallery-duo-models',
      label: '03. Fotografía Editorial // Dúo en Exteriores',
      src: IMAGE_REGISTRY.JERSEY_MODEL_DUO.filePath!,
      alt: IMAGE_REGISTRY.JERSEY_MODEL_DUO.altText,
      viewType: 'model-front'
    }
  ],
  status: CURRENT_COLLECTION_CONFIG.releaseStatus,
  sizes: ['1 (S-M)', '2 (L-XL)'],
  isStarProduct: true
};

export const TRACKSUIT_PRODUCT: Product = {
  id: 'null-tracksuit-001',
  code: 'NS-W26-TS01',
  title: 'NULL.SYS — Technical Tracksuit',
  category: 'chandales',
  categoryLabel: 'SEE YOU IN VOID // Technical Nylon Shell',
  priceEUR: CURRENT_COLLECTION_CONFIG.products.tracksuit.priceEUR,
  priceConfigured: CURRENT_COLLECTION_CONFIG.products.tracksuit.priceConfigured,
  currency: 'EUR',
  isPreOrder: true,
  description: 'Conjunto técnico deportivo de corte oversized compuesto por chaqueta con cuello alto y pantalón cargo con ribetes reflectantes. Incorpora en la espalda la ilustración gráfica de la línea KAMI TO TO NO MI en gran formato.',
  features: [
    'Tejido técnico de nylon repelente al agua de alto rendimiento',
    'Ilustración anime de gran formato serigrafiada en la espalda',
    'Ribetes tubulares reflectantes a lo largo de mangas y perneras',
    'Cintura y puños con elástico reforzado',
    'Pantalón técnico con bolsillos cargo laterales y cierre ajustable en tobillo',
    'Disponible en Black Edition y White Edition'
  ],
  image: IMAGE_REGISTRY.CATALOG_TRACKSUIT_CARD.filePath!,
  variants: [
    {
      id: 'black',
      name: 'Black Edition',
      colorCode: '#111113',
      image: IMAGE_REGISTRY.CATALOG_TRACKSUIT_CARD.filePath!,
      backImage: IMAGE_REGISTRY.TRACKSUIT_BLACK_BACK.filePath!
    },
    {
      id: 'white',
      name: 'White Edition',
      colorCode: '#E4E4E7',
      image: IMAGE_REGISTRY.CATALOG_TRACKSUIT_CARD.filePath!,
      backImage: IMAGE_REGISTRY.TRACKSUIT_WHITE_BACK.filePath!
    }
  ],
  gallery: [
    {
      id: 'gallery-tracksuit-black-back',
      label: '01. Black Edition // Espalda Ilustración Anime',
      src: IMAGE_REGISTRY.TRACKSUIT_BLACK_BACK.filePath!,
      alt: IMAGE_REGISTRY.TRACKSUIT_BLACK_BACK.altText,
      viewType: 'model-back'
    },
    {
      id: 'gallery-tracksuit-black-front',
      label: '02. Black Edition // Frontal y Silueta Completa',
      src: IMAGE_REGISTRY.CATALOG_TRACKSUIT_CARD.filePath!,
      alt: IMAGE_REGISTRY.CATALOG_TRACKSUIT_CARD.altText,
      viewType: 'model-front'
    }
  ],
  status: CURRENT_COLLECTION_CONFIG.releaseStatus,
  sizes: ['1 (S-M)', '2 (L-XL)']
};

export const DENIM_PRODUCT: Product = {
  id: 'null-denim-001',
  code: 'NS-W26-DN01',
  title: 'NULL.SYS — Baggy Washed Denim',
  category: 'pantalones',
  categoryLabel: 'SEE YOU IN VOID // Heavyweight Washed Denim',
  priceEUR: CURRENT_COLLECTION_CONFIG.products.denim.priceEUR,
  priceConfigured: CURRENT_COLLECTION_CONFIG.products.denim.priceConfigured,
  currency: 'EUR',
  description: 'Pantalón vaquero de 14.5 oz con lavado ácido mineral gris ceniza, silueta extra ancha baggy y parche de tela exclusivo con ilustración anime en el bolsillo posterior.',
  features: [
    'Denim 100% algodón de 14.5 oz de alto gramaje',
    'Lavado ácido mineral oscuro de fricción urbana',
    'Parche bordado exclusivo de inspiración anime en bolsillo trasero',
    'Corte oversized con caída recta sobre el calzado',
    'Herrajes metálicos industriales en tono cromo envejecido'
  ],
  image: IMAGE_REGISTRY.CATALOG_DENIM_CARD.filePath!,
  gallery: [
    {
      id: 'gallery-denim-main',
      label: '01. Silueta Completa // Parche Posterior Anime',
      src: IMAGE_REGISTRY.CATALOG_DENIM_CARD.filePath!,
      alt: IMAGE_REGISTRY.CATALOG_DENIM_CARD.altText,
      viewType: 'product-front'
    },
    {
      id: 'gallery-denim-collage',
      label: '02. Collage Técnico // Bolsillos y Remaches',
      src: IMAGE_REGISTRY.DENIM_COLLAGE_DETAILS.filePath!,
      alt: IMAGE_REGISTRY.DENIM_COLLAGE_DETAILS.altText,
      viewType: 'product-front'
    }
  ],
  status: CURRENT_COLLECTION_CONFIG.releaseStatus,
  sizes: ['28-30 (S)', '31-33 (M)', '34-36 (L)']
};

export const BEANIE_PRODUCT: Product = {
  id: 'null-beanie-001',
  code: 'NS-W26-AC01',
  title: 'NULL.SYS — Kami Beanie',
  category: 'accesorios',
  categoryLabel: 'KAMI TO TO NO MI // Hardware Accessories',
  priceEUR: CURRENT_COLLECTION_CONFIG.products.beanie.priceEUR,
  priceConfigured: CURRENT_COLLECTION_CONFIG.products.beanie.priceConfigured,
  currency: 'EUR',
  description: 'Gorro de punto acanalado grueso de la línea KAMI TO TO NO MI. Presenta gráfico de rostro anime pixelado en jacquard e inserción de ojal piercing metálico plateado en el dobladillo.',
  features: [
    'Punto acanalado de alta densidad',
    'Ilustración anime pixelada en tejido jacquard frontal',
    'Piercing / aro metálico plateado insertado en el dobladillo',
    'Etiqueta tejida de marca en la parte lateral',
    'Diseño unisex con ajuste envolvente',
    'Disponible en Black Edition y White Edition'
  ],
  image: IMAGE_REGISTRY.CATALOG_BEANIE_CARD.filePath!,
  variants: [
    {
      id: 'black',
      name: 'Black Edition',
      colorCode: '#111113',
      image: IMAGE_REGISTRY.BEANIE_BLACK_DETAIL.filePath!
    },
    {
      id: 'white',
      name: 'White Edition',
      colorCode: '#E4E4E7',
      image: IMAGE_REGISTRY.BEANIE_WHITE_DETAIL.filePath!
    }
  ],
  gallery: [
    {
      id: 'gallery-beanie-main-5220',
      label: '01. Colección KAMI // 5 Gorros Pixel Anime (IMG-5220)',
      src: IMAGE_REGISTRY.CATALOG_BEANIE_CARD.filePath!,
      alt: IMAGE_REGISTRY.CATALOG_BEANIE_CARD.altText,
      viewType: 'product-front'
    },
    {
      id: 'gallery-beanie-black',
      label: '02. Black Edition // Ojal Metálico y Pixel Face',
      src: IMAGE_REGISTRY.BEANIE_BLACK_DETAIL.filePath!,
      alt: IMAGE_REGISTRY.BEANIE_BLACK_DETAIL.altText,
      viewType: 'product-front'
    },
    {
      id: 'gallery-beanie-white',
      label: '03. White Edition // Ojal Metálico y Pixel Face',
      src: IMAGE_REGISTRY.BEANIE_WHITE_DETAIL.filePath!,
      alt: IMAGE_REGISTRY.BEANIE_WHITE_DETAIL.altText,
      viewType: 'product-front'
    },
    {
      id: 'gallery-beanie-grid',
      label: '04. Muestra Multiperspectiva // Catálogo de Ángulos',
      src: IMAGE_REGISTRY.BEANIE_GRID_SHOWCASE.filePath!,
      alt: IMAGE_REGISTRY.BEANIE_GRID_SHOWCASE.altText,
      viewType: 'product-front'
    }
  ],
  status: CURRENT_COLLECTION_CONFIG.releaseStatus,
  sizes: ['ONE SIZE']
};

export const PUFFER_PRODUCT: Product = {
  id: 'null-puffer-001',
  code: 'NS-ARCH-PF01',
  title: 'NULL.SYS — Abrigo Puffer Negra',
  category: 'archive',
  categoryLabel: 'ARCHIVE // Heavy Outerwear',
  priceEUR: CURRENT_COLLECTION_CONFIG.products.puffer.priceEUR,
  priceConfigured: CURRENT_COLLECTION_CONFIG.products.puffer.priceConfigured,
  currency: 'EUR',
  description: 'Chaqueta acolchada negra de gran volumen con cuello alto envolvente y cremallera frontal completa.',
  features: ['Color negro mate', 'Silueta puffer de gran volumen', 'Cuello alto acolchado', 'Cremallera frontal completa'],
  image: IMAGE_REGISTRY.CATALOG_PUFFER_CARD.filePath!,
  gallery: [
    {
      id: 'gallery-puffer-editorial',
      label: '01. Fotografía Editorial // Modelo con Puffer',
      src: IMAGE_REGISTRY.PUFFER_PAGE_EDITORIAL_MODEL.filePath!,
      alt: IMAGE_REGISTRY.PUFFER_PAGE_EDITORIAL_MODEL.altText,
      viewType: 'model-front'
    }
  ],
  status: CURRENT_COLLECTION_CONFIG.releaseStatus,
  sizes: ['1 (S-M)', '2 (L-XL)']
};

export const SUDADERA_PRODUCT: Product = {
  id: 'null-sudadera-001',
  code: 'NS-ARCH-HD01',
  title: 'NULL.SYS — Sudadera con Capucha',
  category: 'archive',
  categoryLabel: 'ARCHIVE // Heavyweight Hoodie',
  priceEUR: CURRENT_COLLECTION_CONFIG.products.sudadera.priceEUR,
  priceConfigured: CURRENT_COLLECTION_CONFIG.products.sudadera.priceConfigured,
  currency: 'EUR',
  description: 'Sudadera con capucha en lavado ácido mineral oscuro, bolsillo canguro y capucha cruzada doble.',
  features: ['Tono ceniza oscuro', 'Silueta oversized con hombro caído', 'Bolsillo canguro', 'Capucha cruzada'],
  image: IMAGE_REGISTRY.CATALOG_SUDADERA_CARD.filePath!,
  gallery: [
    {
      id: 'gallery-sudadera-editorial',
      label: '01. Fotografía Editorial // Lavado Mineral Oscuro',
      src: IMAGE_REGISTRY.SUDADERA_PAGE_EDITORIAL_MODEL.filePath!,
      alt: IMAGE_REGISTRY.SUDADERA_PAGE_EDITORIAL_MODEL.altText,
      viewType: 'model-front'
    }
  ],
  status: CURRENT_COLLECTION_CONFIG.releaseStatus,
  sizes: ['1 (S-M)', '2 (L-XL)']
};

export const PRODUCTS: Product[] = [
  STAR_PRODUCT,
  TRACKSUIT_PRODUCT,
  DENIM_PRODUCT,
  BEANIE_PRODUCT,
  PUFFER_PRODUCT,
  SUDADERA_PRODUCT
];

