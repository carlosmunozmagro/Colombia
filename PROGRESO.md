# Notas de progreso
Estado: v3 COMPLETA. 14 jul 2026.
v1: itinerario, 5 ciudades, práctico, PWA offline.
v2: pestaña Tareas (checklist diaria persistente, check-ins con horarios verificados, maleta, HOY).
v3: 📍 enlaces Google Maps automáticos en todos los restaurantes/sitios + hoteles del itinerario, botón "🏨 Vuestro hotel en Maps" en cada ciudad, conversor COP↔EUR con chips rápidos (10k-500k) y tasa editable persistente (default 4.500), bloque códigos de reserva, navegación por hash (botón atrás del móvil funciona y la app reabre donde estabas). sw cache v3.
Pendiente: hotel de Cartagena (nombre desconocido), presupuesto por ciudad (idea v4).
v4: MODO HISTORIA tipo stories de Instagram — pantalla completa, barras de progreso, tap derecha/izquierda (y flechas/Esc en teclado), vibración sutil al tocar, gradiente por ciudad, 27 "momentos" históricos en 5 ciudades. Botón "▶ Ver como historia" al inicio de cada sección Historia. Sin fotos externas: 100% offline y sin problemas de derechos. sw cache v4.
v5: Hotel de Cartagena identificado = Faranda Collection Cartagena (Cielo Mar/La Boquilla, 5★, playa propia, 10 min aeropuerto / 15-20 min centro). Plan de Cartagena reescrito: llegada nocturna 21, congreso Adriana mié 22 - vie 24 mañana, Open Water de Carlos días 22-23 + último buceo viernes MAÑANA (acaba ~13:00, 31h antes del vuelo ✓), viernes tarde y sábado juntos, salida al aeropuerto 18:30 (está al lado). Tareas de los días 21-25 actualizadas (57 tareas base). sw cache v5.
App COMPLETA e íntegra: los 5 archivos del repo son index.html, manifest.json, sw.js, icon-192.png, icon-512.png.
v6: Modo historia reconstruido como SCROLLYTELLING de pantalla completa: scroll con snap por momento, fotos reales resueltas en runtime desde la API de Wikipedia (imagen principal del artículo de cada momento, 26 con foto; la de "los años oscuros" de Medellín va sin foto a propósito), efecto Ken Burns, velos de color por ciudad, año/título/texto con animación de entrada escalonada (IntersectionObserver), barras de progreso ligadas al scroll, zona inferior tocable para avanzar, portada con "desliza ⌄", vibración al cambiar, crédito 📷 Wikipedia. Fallback elegante a degradado si no hay red; sw.js v6 cachea también wikipedia/wikimedia para verlo offline tras la primera vez.
v7 (LA GRANDE): 
- FIX fotos historias: ahora usa originalimage/thumbnail reales de la API (antes fabricaba tamaños inexistentes). OJO: en la preview de Claude las peticiones externas están bloqueadas; en GitHub Pages funcionan.
- Historias: contadores animados (11 km murallas, 186 barcos, 60 m palma, 1M viajes metro, 180.000 km² Seaflower, 2.640 m...) + botones "✨ Dato curioso" desplegables (15 añadidos).
- NUEVO: sección "🗺️ Mapa" en cada ciudad (Leaflet + OpenStreetMap): 50 pins con coordenadas verificadas vía Google Places (⭐ ver / 🍽️ comer / 🏨 hotel), popup con consejo + link "Cómo llegar". Mapa se inicializa al abrir la pestaña.
- sw v7 cachea también OSM tiles, cdnjs y fuentes.
