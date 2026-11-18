# Máscara IA — guía rápida

Filtro de cara en tiempo real que funciona en el navegador (móvil y ordenador). Gratis, sin servidor, sin GPU.
Tu cámara y las fotos NO se suben a ningún sitio; solo la videollamada va directa entre los dos dispositivos.

## 1. Publicarla gratis (5 minutos, con GitHub Pages)
1. Crea una cuenta en github.com y un repositorio nuevo, público, llamado `mascara-ia`.
2. «Add file → Upload files» y sube TODOS los archivos de esta carpeta (index.html, manifest.json, sw.js, los dos iconos).
3. Settings → Pages → Source: «Deploy from a branch» → rama `main`, carpeta `/ (root)` → Save.
4. En un minuto tendrás una dirección tipo `https://TUUSUARIO.github.io/mascara-ia/`. Es https, necesario para la cámara.
   (Alternativa aún más fácil: arrastra la carpeta a app.netlify.com/drop.)

## 2. Usarla en el móvil
Abre la dirección en Chrome (Android) o Safari (iPhone) → menú → «Añadir a pantalla de inicio / Instalar app».

## 3. Convertirla en APK (Android)
1. Entra en pwabuilder.com, pega tu dirección y pulsa Start.
2. «Package for stores» → Android → Generate. Descarga el .apk e instálalo en tu móvil.

## 4. Videollamada
- Ambos abren la web. Cada uno ve su «código». Uno escribe el código del otro y pulsa Llamar.
- Ven tu cara ya con el filtro; el otro ve tu video modificado.

## 5. Usarlo en Zoom / Meet / Teams (ordenador)
1. Instala OBS Studio (gratis). Añade una fuente «Captura de ventana» del navegador con la web abierta (recorta solo el video).
2. «Iniciar cámara virtual» en OBS.
3. En Zoom/Meet/Teams elige la cámara «OBS Virtual Camera».

## Consejos
- Foto de referencia: de frente, bien iluminada, sin gafas ni pelo tapando la cara.
- Buena luz y cara de frente = mejor resultado. Los giros bruscos delatan que es una máscara.
- Es un filtro, no un deepfake de IA: se adapta a tus gestos pero no recrea la cara en 3D.
- Úsalo solo en llamadas donde todos sepan que es un filtro. Dejar la etiqueta «Cara generada por IA» activada ayuda a eso.
