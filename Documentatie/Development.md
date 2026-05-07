# Development + deploy Regels

- Gebruik Vite + React + TypeScript als basis voor de MVP.
- Houd de applicatie fullscreen: `html`, `body` en `#root` hebben 100% hoogte en geen scrollbars.
- Assets voor stadionlocaties staan onder `public/assets/stadium/` en moeten vervangbaar blijven zonder codewijzigingen buiten `locations.ts`.
- Locaties en hotspotposities worden centraal beheerd in `src/data/locations.ts`.
- UI-componenten blijven opgesplitst in kaart, hotspot, detailpaneel en bottom gallery.
- Gebruik Framer Motion voor zichtbare overgangen en hover/tap feedback.
- Gebruik Tailwind als toolchain, met projectspecifieke styling in `src/styles.css` zolang er nog geen component design system is.
- Verifieer na wijzigingen minimaal met `npm run build`.
