# Portafolio — Scaffold

Proyecto scaffoldado con Astro + Vue + Tailwind. Contiene páginas y contenido inicial en español para un portafolio profesional.

Instalación y desarrollo local

```bash
npm install
npm run dev
```

Build y preview

```bash
npm run build
npm run preview
```

Despliegue

Se recomienda desplegar en Vercel (conexión a GitHub). Añade tu `CV_Mohamed.html` o `CV_Mohamed.pdf` en `public/` para que el enlace funcione.

Estructura clave

- `src/pages/index.astro` — landing
- `src/pages/projects/*` — páginas de caso
- `src/components/*` — componentes reutilizables
- `public/images/*` — imágenes y placeholders

Siguientes pasos sugeridos:

- Reemplazar imágenes placeholder en `public/images/` por capturas reales.
- Actualizar enlaces (LinkedIn, email) en `src/components/Contact.astro`.
- Añadir `CV_Mohamed.pdf` en `public/` si prefieres PDF.
