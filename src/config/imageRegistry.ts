/**
 * NULL.SYS — Centralized Image Allocation Registry & Anti-Collision Validator
 * 
 * Strict Rule: Each photograph is assigned to exactly ONE location across the entire app.
 * No photo may be repeated in cards, hero, galleries, lookbooks, drawers, or headers.
 */

export interface ImageSlot {
  slotId: string;
  locationName: string;
  promptReference: string;
  filePath: string | null;
  isPending: boolean;
  altText: string;
  notes?: string;
}

export const IMAGE_REGISTRY: Record<string, ImageSlot> = {
  // 1. Inicio / Menú Principal (EXCLUSIVE 4-MODEL STUDIO HERO — 16:9)
  INICIO_GROUP_HERO: {
    slotId: 'INICIO_GROUP_HERO',
    locationName: 'Inicio / Menú Principal (Foto Grupal)',
    promptReference: 'modelo_menu_prinicipal.jpg',
    filePath: '/modelo_menu_prinicipal.jpg',
    isPending: false,
    altText: 'Cuatro modelos vestidos con chándales técnicos NULL.SYS y gorro anime en estudio de fondo blanco en formato 16:9',
    notes: 'Exclusiva de Inicio. Cuatro modelos: masculino chándal negro, femenina chándal negro, masculino chándal negro, femenina chándal blanco con gorro anime.'
  },

  // 2. Catálogo: Tarjeta del Jersey (Actualizado null_jersey_1)
  CATALOG_JERSEY_CARD: {
    slotId: 'CATALOG_JERSEY_CARD',
    locationName: 'Catálogo: Tarjeta Jersey Anime Distressed Knit',
    promptReference: 'null_jersey_1.jpg',
    filePath: '/null_jersey_1.jpg',
    isPending: false,
    altText: 'Jersey Anime Distressed Knit negro oversized con gráfico anime frontal y posterior'
  },

  // 3. Catálogo: Tarjeta del Chándal Técnico (Silueta Frontal tracksuit_black)
  CATALOG_TRACKSUIT_CARD: {
    slotId: 'CATALOG_TRACKSUIT_CARD',
    locationName: 'Catálogo: Tarjeta Chándal Técnico NULL.SYS',
    promptReference: 'tracksuit_black.jpg',
    filePath: '/tracksuit_black.jpg',
    isPending: false,
    altText: 'NULL.SYS Technical Tracksuit Black Edition conjunto deportivo técnico de nylon con ribetes'
  },

  // 4. Catálogo: Tarjeta Pantalones Baggy Denim
  CATALOG_DENIM_CARD: {
    slotId: 'CATALOG_DENIM_CARD',
    locationName: 'Catálogo: Tarjeta NULL.SYS Baggy Washed Denim',
    promptReference: 'C/PNG/Gemini_Generated_Image_qhr8plqhr8plqhr8_6f1ad5e7.jpg',
    filePath: '/public/assets/aistudio/Gemini_Generated_Image_qhr8plqhr8plqhr8_6f1ad5e7.jpg',
    isPending: false,
    altText: 'Pantalones vaqueros anchos baggy NULL.SYS con lavado ácido y parche anime trasero'
  },

  // 5. Catálogo: Tarjeta Gorro Beanie Kami (IMG-5220)
  CATALOG_BEANIE_CARD: {
    slotId: 'CATALOG_BEANIE_CARD',
    locationName: 'Catálogo: Tarjeta Gorro Beanie Kami Accessories',
    promptReference: 'IMG-5220.jpg',
    filePath: '/IMG-5220.jpg',
    isPending: false,
    altText: 'NULL.SYS Kami Beanie colección de gorros anime de punto jacquard sobre fondo de estudio'
  },

  // 6. Catálogo: Tarjeta del Abrigo Puffer (Archive)
  CATALOG_PUFFER_CARD: {
    slotId: 'CATALOG_PUFFER_CARD',
    locationName: 'Catálogo: Tarjeta Abrigo Puffer Negra',
    promptReference: 'P/TRANSPARENTES/03-puffer-transparente.png',
    filePath: '/public/assets/aistudio/03-puffer-transparente_a9b40eef.png',
    isPending: false,
    altText: 'Chaqueta puffer acolchada negra de cuello alto sobre fondo transparente'
  },

  // 7. Catálogo: Tarjeta de la Sudadera (Archive)
  CATALOG_SUDADERA_CARD: {
    slotId: 'CATALOG_SUDADERA_CARD',
    locationName: 'Catálogo: Tarjeta Sudadera con Capucha',
    promptReference: 'P/TRANSPARENTES/04-sudadera-transparente.png',
    filePath: '/public/assets/aistudio/04-sudadera-transparente_bc4e5cad.png',
    isPending: false,
    altText: 'Sudadera con capucha en lavado ácido gris oscuro sobre fondo transparente'
  },

  // 8. Chándal Técnico: Espalda Black Edition
  TRACKSUIT_BLACK_BACK: {
    slotId: 'TRACKSUIT_BLACK_BACK',
    locationName: 'Página Chándal: Espalda Black Edition',
    promptReference: 'C/PNG/Moda_urbana_futurista_NULL.SYS_2_ee1c572d.png',
    filePath: '/public/assets/aistudio/Moda_urbana_futurista_NULL.SYS_2_ee1c572d.png',
    isPending: false,
    altText: 'NULL.SYS Technical Tracksuit Black Edition con gráfica anime trasera gigante e inscripciones técnicas'
  },

  // 9. Chándal Técnico: Espalda White Edition
  TRACKSUIT_WHITE_BACK: {
    slotId: 'TRACKSUIT_WHITE_BACK',
    locationName: 'Página Chándal: Espalda White Edition',
    promptReference: 'C/PNG/Conjunto_futurista_NULL.SYS_en_estudio_ad52f3b0.png',
    filePath: '/public/assets/aistudio/Conjunto_futurista_NULL.SYS_en_estudio_ad52f3b0.png',
    isPending: false,
    altText: 'NULL.SYS Technical Tracksuit White Edition con chaqueta de capucha blanca y pantalón técnico'
  },

  // 10. Jersey Anime Distressed Knit: Variante Red (Detalle Rostro Anime y Logo Rojo)
  JERSEY_RED_VARIANT_VIEW: {
    slotId: 'JERSEY_RED_VARIANT_VIEW',
    locationName: 'Página del Jersey: Variante Red (Detalle Rostro Anime y Logo Rojo)',
    promptReference: 'C/PNG/40688AFF-4CD9-441F-AFE3-63C4EAAA9116_1107c892.PNG',
    filePath: '/public/assets/aistudio/40688AFF-4CD9-441F-AFE3-63C4EAAA9116_1107c892.PNG',
    isPending: false,
    altText: 'Anime Distressed Knit - RED detalle del gráfico anime en rojo y logo bordado sobre punto negro desgastado'
  },

  // 11. Jersey: Bodegón Producto Frontal y Trasero
  JERSEY_FLAT_PRODUCT: {
    slotId: 'JERSEY_FLAT_PRODUCT',
    locationName: 'Página del Jersey: Bodegón Frontal y Trasero',
    promptReference: 'C/PNG/IMG_5177_8bb7b558.JPG',
    filePath: '/public/assets/aistudio/IMG_5177_8bb7b558.JPG',
    isPending: false,
    altText: 'Fotografía de producto del jersey Anime Distressed Knit colgado mostrando frente y dorso'
  },

  // 12. Jersey: Fotografía Editorial Dúo en Exteriores
  JERSEY_MODEL_DUO: {
    slotId: 'JERSEY_MODEL_DUO',
    locationName: 'Página del Jersey: Fotografía Editorial Dúo Exterior',
    promptReference: 'C/PNG/IMG_5179_48e07d4d.JPG',
    filePath: '/public/assets/aistudio/IMG_5179_48e07d4d.JPG',
    isPending: false,
    altText: 'Dos modelos posando en paso inferior de hormigón con las dos variantes del jersey'
  },

  // 13. Jersey: Foto Principal con Modelo (Frontal)
  JERSEY_PAGE_HERO_MODEL: {
    slotId: 'JERSEY_PAGE_HERO_MODEL',
    locationName: 'Página del Jersey: Foto Principal con Modelo (Frontal)',
    promptReference: 'C/PNG/01-nullsys-jersey-hero-1080x1920.png',
    filePath: '/public/assets/aistudio/Imagen_de_ChatGPT_25_oct_2026__23_34_37_0b01f6ca.png',
    isPending: false,
    altText: 'Modelo posando de frente con el jersey Anime Distressed Knit y gafas envolventes frente a un muro de hormigón'
  },

  // 14. Jersey: Segunda Fotografía Editorial con Modelo
  JERSEY_PAGE_EDITORIAL_MODEL: {
    slotId: 'JERSEY_PAGE_EDITORIAL_MODEL',
    locationName: 'Página del Jersey: Segunda Foto Editorial (Modelo Alternativo)',
    promptReference: 'C/PNG/02-nullsys-jersey-editorial-1080x1920.png',
    filePath: '/public/assets/aistudio/Imagen_de_ChatGPT_25_oct_2026__23_34_44_c8d19cd7.png',
    isPending: false,
    altText: 'Segundo modelo con pelo rizado y cadena plateada vistiendo el jersey Anime Distressed Knit'
  },

  // 15. Jersey: Vista Posterior
  JERSEY_PAGE_BACK_VIEW: {
    slotId: 'JERSEY_PAGE_BACK_VIEW',
    locationName: 'Página del Jersey: Vista Posterior',
    promptReference: 'O/grok-image-ca08c24e-dc61-487f-85b8-ef0913ee50f4.jpg',
    filePath: '/public/assets/aistudio/grok-image-ca08c24e-dc61-487f-85b8-ef0913ee50f4_84f83859.jpg',
    isPending: false,
    altText: 'Vista posterior del modelo mostrando la espalda lisa y el bajo desflecado del jersey'
  },

  // 16. Denim: Collage de Detalles y Bolsillos
  DENIM_COLLAGE_DETAILS: {
    slotId: 'DENIM_COLLAGE_DETAILS',
    locationName: 'Página Denim: Collage de Detalles y Bolsillos',
    promptReference: 'C/PNG/Collage_de_vaqueros_oscuros_NULL.SYS_f1efe4db.png',
    filePath: '/public/assets/aistudio/Collage_de_vaqueros_oscuros_NULL.SYS_f1efe4db.png',
    isPending: false,
    altText: 'Detalles de bolsillos, remaches metálicos, pespuntes y acabado deshilachado de los vaqueros NULL.SYS'
  },

  // 17. Denim: Caída y Proporción Modelo
  DENIM_MODEL_LOOK: {
    slotId: 'DENIM_MODEL_LOOK',
    locationName: 'Página Denim: Caída y Proporción Editorial',
    promptReference: 'C/JPEG/BEE40AB8-5858-47D4-B6CF-F6E70B0155BD_a607dc86.JPEG',
    filePath: '/public/assets/aistudio/BEE40AB8-5858-47D4-B6CF-F6E70B0155BD_a607dc86.JPEG',
    isPending: false,
    altText: 'Corte oversized y silueta baggy de los pantalones denim combinados con calzado robusto'
  },

  // 18. Gorro Beanie: Detalle Black Edition con Aro Metálico
  BEANIE_BLACK_DETAIL: {
    slotId: 'BEANIE_BLACK_DETAIL',
    locationName: 'Página Gorro: Black Edition con Ojal Metálico',
    promptReference: 'C/PNG/Imagen_de_ChatGPT_26_oct_2026__16_38_10_d1517fa3.png',
    filePath: '/public/assets/aistudio/Imagen_de_ChatGPT_26_oct_2026__16_38_10_d1517fa3.png',
    isPending: false,
    altText: 'Gorro negro con rostro anime pixelado y piercing plateado en el dobladillo'
  },

  // 19. Gorro Beanie: Detalle White Edition con Aro Metálico
  BEANIE_WHITE_DETAIL: {
    slotId: 'BEANIE_WHITE_DETAIL',
    locationName: 'Página Gorro: White Edition con Ojal Metálico',
    promptReference: 'C/PNG/Imagen_de_ChatGPT_26_oct_2026__16_55_52_7a8a43e6.png',
    filePath: '/public/assets/aistudio/Imagen_de_ChatGPT_26_oct_2026__16_55_52_7a8a43e6.png',
    isPending: false,
    altText: 'Gorro blanco con rostro anime pixelado y piercing metálico en el dobladillo'
  },

  // 20. Gorro Beanie: Catálogo Multiperspectiva
  BEANIE_GRID_SHOWCASE: {
    slotId: 'BEANIE_GRID_SHOWCASE',
    locationName: 'Página Gorro: Muestra Multiperspectiva',
    promptReference: 'C/PNG/Cata_logo_de_gorros_pixelados_null.sys__2__0ede960f.png',
    filePath: '/public/assets/aistudio/Cata_logo_de_gorros_pixelados_null.sys__2__0ede960f.png',
    isPending: false,
    altText: 'Muestra multi-ángulo de los gorros pixelados NULL.SYS'
  },

  // 21. Gorro Beanie: Detalle de Tejido Retro
  BEANIE_LIFESTYLE_SHOT: {
    slotId: 'BEANIE_LIFESTYLE_SHOT',
    locationName: 'Página Gorro: Detalle de Punto y Ajuste',
    promptReference: 'C/PNG/Gorros_negros_de_este_tica_anime_yahora_retro__1__3abe8726.png',
    filePath: '/public/assets/aistudio/Gorros_negros_de_este_tica_anime_yahora_retro__1__3abe8726.png',
    isPending: false,
    altText: 'Detalle del tejido de punto acanalado y silueta ajustada del gorro'
  },

  // 22. Abrigo Puffer: Fotografía Editorial con Modelo (Archive)
  PUFFER_PAGE_EDITORIAL_MODEL: {
    slotId: 'PUFFER_PAGE_EDITORIAL_MODEL',
    locationName: 'Página del Abrigo: Foto Editorial con Modelo',
    promptReference: 'C/PNG/04-nullsys-puffer-1080x1920.png',
    filePath: '/public/assets/aistudio/Imagen_de_ChatGPT_25_oct_2026__23_34_56_104617df.png',
    isPending: false,
    altText: 'Modelo con gafas y auriculares apoyada en un pilar de hormigón vistiendo el abrigo puffer negro'
  },

  // 23. Sudadera: Fotografía Editorial (Archive)
  SUDADERA_PAGE_EDITORIAL_MODEL: {
    slotId: 'SUDADERA_PAGE_EDITORIAL_MODEL',
    locationName: 'Página de la Sudadera: Foto Editorial',
    promptReference: 'C/PNG/Imagen_de_ChatGPT_25_oct_2026__23_34_50_9de1f6d1.png',
    filePath: '/public/assets/aistudio/Imagen_de_ChatGPT_25_oct_2026__23_34_50_9de1f6d1.png',
    isPending: false,
    altText: 'Modelo vistiendo la sudadera con capucha en lavado ácido oscuro'
  }
};

/**
 * Runtime Collision Detector: Asserts zero images are duplicated across slots.
 */
export function validateImageUniqueness(): { valid: boolean; collisions: string[] } {
  const pathMap = new Map<string, string[]>();
  const collisions: string[] = [];

  for (const slot of Object.values(IMAGE_REGISTRY)) {
    if (!slot.filePath) continue;
    const existing = pathMap.get(slot.filePath) || [];
    existing.push(slot.slotId);
    pathMap.set(slot.filePath, existing);
  }

  for (const [path, slots] of pathMap.entries()) {
    if (slots.length > 1) {
      collisions.push(`Collision detected: ${path} assigned to multiple slots [${slots.join(', ')}]`);
    }
  }

  if (collisions.length > 0) {
    console.error('[NULL.SYS Anti-Slop / Zero-Repetition Violation]', collisions);
  } else {
    console.log('[NULL.SYS Registry] Zero-repetition invariant verified. All assigned assets are strictly exclusive.');
  }

  return {
    valid: collisions.length === 0,
    collisions
  };
}

// Execute self-check on initialization
validateImageUniqueness();
