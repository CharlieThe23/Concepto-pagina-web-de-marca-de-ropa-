# Plan de Implementación: Reubicación de Activos de Catálogo & Nueva Variante "Anime Distressed Knit - RED"

Este plan describe los ajustes necesarios para reasignar la fotografía del jersey negro con gráfico anime en rojo (actualmente asignada por error al Ángulo 02 del chándal blanco) a la sección oficial de **ANIME DISTRESSED KNIT**, y depurar la galería del **NULL.SYS TECHNICAL TRACKSUIT (White Edition)**.

---

## 1. User Review Required (Puntos Críticos de Revisión)

- **Eliminación en Tracksuit White Edition**: Se retirará definitivamente el Ángulo 02 ("Detalle Cuello & Ribetes"). El Tracksuit White Edition dispondrá exclusivamente del Ángulo 01 ("01. Espalda y Capucha // White Edition").
- **Asignación en Anime Distressed Knit**:
  - **VISTA 01**: `null_jersey_1.jpg` (frontal y dorsal de producto).
  - **VISTA 02**: `40688AFF-4CD9-441F-AFE3-63C4EAAA9116_1107c892.PNG` con la denominación oficial **"Anime Distressed Knit - RED"** (mostrando el detalle en punto con gráfico anime y logotipo en rojo contrastado).
  - Selector de colorway en la ficha técnica: Permite alternar entre **"Original / Black"** y **"Anime Distressed Knit - RED"**, sincronizando dinámicamente la vista activa y la información del producto.
- **Registro Anti-Colisión (Zero-Duplication Invariant)**: Se actualizará `IMAGE_REGISTRY` para que el activo pertenezca únicamente a la ranura del Jersey, manteniendo la regla estricta de cero duplicados.

---

## 2. Cambios Propuestos

### A. Registro Central de Activos (`src/config/imageRegistry.ts`)
- Reemplazar la ranura `TRACKSUIT_FRONT_DETAIL` por la nueva ranura `JERSEY_RED_VARIANT_VIEW`.
- Asignar a `JERSEY_RED_VARIANT_VIEW` el archivo `/public/assets/aistudio/40688AFF-4CD9-441F-AFE3-63C4EAAA9116_1107c892.PNG` con metadatos descriptivos de la variante "Anime Distressed Knit - RED".
- Asegurar que `validateImageUniqueness()` valide 100% de unicidad sin colisiones.

### B. Catálogo de Datos (`src/data/products.ts`)
- **`TRACKSUIT_PRODUCT`**:
  - En la variante `white`, verificar que no referencie fotos erróneas.
  - En la galería general de `TRACKSUIT_PRODUCT`, eliminar la entrada de detalle de cuello y dejar exclusivamente las perspectivas reales del chándal.
- **`STAR_PRODUCT` (Anime Distressed Knit)**:
  - Definir las variantes de color:
    1. `black`: `"Anime Distressed Knit - BLACK"` (imagen principal `null_jersey_1.jpg`).
    2. `red`: `"Anime Distressed Knit - RED"` (imagen con detalle rojo `40688AFF-4CD9-441F-AFE3-63C4EAAA9116_1107c892.PNG`).
  - Configurar la galería:
    - `01. Fotografía Actualizada // Frontal y Dorsal (null_jersey_1)`
    - `02. Anime Distressed Knit - RED // Rostro Anime y Logo Rojo (VISTA 02)`

### C. Vista de Detalle del Chándal (`src/components/TracksuitProductView.tsx`)
- En `whiteViews`, eliminar el segundo elemento (`02. Detalle Cuello & Ribetes`).
- Mantener únicamente `01. Espalda y Capucha // White Edition`.
- Ajustar la botonera de ángulos para adaptarse limpiamente tanto a 2 ángulos (Black Edition) como a 1 ángulo (White Edition), evitando estados inconsistentes o botones huérfanos al conmutar entre colores.

### D. Vista de Detalle del Jersey (`src/components/JerseyProductView.tsx`)
- Actualizar el array `views`:
  - `VISTA 01`: `null_jersey_1.jpg` (Vista frontal/dorsal completa).
  - `VISTA 02`: `40688AFF-4CD9-441F-AFE3-63C4EAAA9116_1107c892.PNG` con el título `02. Anime Distressed Knit - RED // Gráfico Anime y Logo Rojo`.
- Añadir un selector de variante de color industrial en la columna de compra:
  - Botones tácticos: `[ BLACK ]` y `[ RED ]` (mostrando el nombre comercial `"Anime Distressed Knit - RED"`).
  - Al pulsar la variante RED, se selecciona y navega automáticamente a la `VISTA 02`.
  - Terminal Scanner Overlay y zoom totalmente operativos sobre ambas perspectivas.

---

## 3. Plan de Verificación

### Verificación Automatizada
- Ejecutar `compile_applet` para confirmar que no existen errores tipográficos ni errores de TypeScript.
- Ejecutar autochequeo del registro (`validateImageUniqueness`) para confirmar cero colisiones de imágenes.

### Verificación Manual / Visual
- **Tracksuit**:
  - Seleccionar la White Edition: comprobar que solo figura "ÁNGULO 01" y no hay rastro del cuello del jersey.
  - Seleccionar la Black Edition: comprobar que cuenta con sus dos ángulos correctos sin distorsión.
- **Anime Distressed Knit**:
  - Comprobar que VISTA 01 muestra `null_jersey_1.jpg`.
  - Comprobar que VISTA 02 muestra la fotografía del jersey negro con el logo y rostro rojo.
  - Conmutar con el selector de color (`Anime Distressed Knit - RED`) y verificar que se enfoca la VISTA 02.
  - Verificar que el efecto de escaneo láser (Terminal Scanner Overlay) funciona con nitidez sobre ambas imágenes.
