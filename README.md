# NULL.SYS — Official Web & Landing Page

Sitio web oficial y landing page interactiva para **NULL.SYS**, marca de streetwear de estética brutalista, industrial y Y2K. Diseñada con un enfoque de arquitectura frontend accesible, ligero y optimizado.

![Estado del Proyecto](https://img.shields.io/badge/A11y-WCAG%202.1%20AA-brightgreen)
![Licencia](https://img.shields.io/badge/License-MIT-blue)

---

## ♿ Declaración y Características de Accesibilidad (A11y)

El diseño industrial y brutalista suele presentar barreras de legibilidad. En la web de **NULL.SYS**, la estética monocromática y de alto impacto se ha construido cumpliendo las pautas de accesibilidad **WCAG 2.1 Nivel AA**.

### 🎨 Alto Contraste y Tipografía
* **Ratio de contraste elevado:** El esquema de color utiliza fondos de contraste absoluto (`#000000` con textos `#FFFFFF` y acentos de alto brillo), superando el ratio mínimo de **4.5:1** para texto normal y **3:1** para componentes de interfaz.
* **Escalabilidad de texto:** Utilización de unidades relativas (`rem` / `em`). El layout soporta un zoom del navegador de hasta el **200%** sin pérdida de contenido ni superposición de elementos.

### ⌨️ Navegación por Teclado
* **Navegación secuencial:** Todos los elementos interactivos (botones, enlaces, campos de formulario para acceso a *pre-orders*) son accesibles secuencialmente mediante la tecla `Tab`.
* **Focus States Visibles:** Implementación de estilos explícitos en `:focus-visible` mediante anillos de enfoque de alto contraste, garantizando que el cursor de teclado nunca se pierda.

### 🔊 Compatibilidad con Lectores de Pantalla (Screen Readers)
* **HTML5 Semántico:** Estructuración limpia basada en etiquetas nativas (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
* **Atributos ARIA:** Uso de `aria-label` en enlaces de redes sociales e iconos monocromáticos sin texto visible, y `aria-live="polite"` para notificaciones dinámicas (ej. confirmación al registrar el email para el Drop 01).
* **Imágenes y Multimedia:** Atributos `alt` descriptivos en todas las fotografías de producto y gráficos conceptuales, omitiendo texto en imágenes decorativas (`alt=""`).

### ⚡ Movimiento Reducido y Rendimiento
* **Soporte `prefers-reduced-motion`:** Respeto a las preferencias del sistema del usuario. Toda animación de glitch, parpadeo o desplazamiento continuo se deshabilita automáticamente si el usuario tiene activada la reducción de movimiento en su sistema operativo.
* **Estructura DOM Ligera:** Sin carga de librerías pesadas, garantizando una rápida lectura por tecnologías de asistencia y conexiones móviles lentas.

---

## 🛠️ Tecnologías Utilizadas

* **HTML5** Semántico
* **CSS3** (Custom Properties, Grid, Flexbox, Media Queries de A11y)
* **JavaScript (Vanilla)**
* **Despliegue:** GitHub Pages / Vercel

---

## 🚀 Instalación y Uso Local

1. Enlace de la web: https://null-sys-brutalist-y2k-utilitarian-streetwear.ai.studio

2. Clona el repositorio:
   ```bash
   git clone [https://github.com/tu-usuario/null-sys-web.git](https://github.com/tu-usuario/null-sys-web.git)
