\# Frameless Fullscreen Stadium Demo



\## Doel



De applicatie moet voelen als een echte management-game interface, niet als een standaard website.



De volledige ervaring draait om een fullscreen stadion-overview op basis van een vaste foto of luchtbeeld.
zie Inputschermen\startscherm.png



\---



\# Technische Stack



\* React

\* Vite

\* TypeScript

\* Tailwind CSS

\* Framer Motion



\---



\# Algemene Richting



Maak een cinematic fullscreen ervaring:



\* fullscreen achtergrondfoto

\* geen scrollbars

\* geen browser-look

\* geen witte randen

\* geen standaard HTML uitstraling

\* UI zweeft boven de afbeelding

\* premium football management uitstraling



De interface moet aanvoelen als een moderne management game.



\---



\# Layout



\## 1. Fullscreen achtergrondfoto



Gebruik een stadion-overview als fullscreen achtergrond:



\* `width: 100vw`

\* `height: 100vh`

\* `overflow: hidden`

\* `background-size: cover`

\* `background-position: center`



Bestand:



```text

/public/assets/stadium/overview.jpg

```



\---



\## 2. Hotspots



Plaats interactieve hotspots bovenop de afbeelding.



Functionaliteit:



\* glow-effect

\* hover animatie

\* klikbaar

\* absolute positioned

\* percentage-based positioning



Voorbeeld locaties:



1\. Stadion

2\. Trainingsveld

3\. Clubhuis

4\. Parkeerplaats

5\. Hoofdtribune

6\. Sponsorborden

7\. Lichtmasten



\---



\## 3. Linksboven



Toon:



\* clublogo

\* stadionnaam

\* eventueel reputatie of stadionniveau



\---



\## 4. Linkermenu



Verticale navigatie met alle locaties.



Bij klik:



\* camera/foto transition

\* hotspot focus

\* detailpanel update



\---



\## 5. Rechterpaneel



Glassmorphism informatiepaneel.



Toon:



\* titel locatie

\* beschrijving

\* kenmerken

\* status

\* eventueel toekomstige upgradeknoppen



\---



\## 6. Rechtsonder



Knop:



```text

Terug naar overzicht

```



\---



\## 7. Bottom Gallery



Horizontale gallery met locatie previews.



Bij klik:



\* smooth transition

\* fade

\* zoom



\---



\# Design Richting



\## Visuele stijl



\* donkere premium football management style

\* subtiele cinematic overlay

\* groene neon accentkleur

\* glassmorphism panels

\* blur effecten

\* zachte schaduwen

\* glow hotspots

\* smooth hover animaties



\---



\## Achtergrond Effecten



Voeg toe:



\* subtiele vignette

\* donkere gradient overlay

\* cinematic zoom/pan

\* lichte parallax beweging



\---



\# Animaties



Gebruik Framer Motion voor:



\* fades

\* zoom transitions

\* hotspot hover effects

\* panel animations

\* menu transitions



Alles moet soepel en premium aanvoelen.



\---



\# Structuur



```text

/public/assets/stadium/

&#x20; overview.jpg

&#x20; training-field.jpg

&#x20; clubhouse.jpg

&#x20; parking.jpg

&#x20; main-stand.jpg



/src/data/locations.ts

/src/components/StadiumMap.tsx

/src/components/Hotspot.tsx

/src/components/LocationPanel.tsx

/src/components/BottomGallery.tsx

```



\---



\# Data Structuur



Maak `locations.ts` met:



```ts

{

&#x20; id: string

&#x20; name: string

&#x20; description: string

&#x20; overviewPosition: {

&#x20;   x: number

&#x20;   y: number

&#x20; }

&#x20; image: string

&#x20; level: number

&#x20; status: string

&#x20; features: string\[]

}

```



\---



\# Belangrijk



Gebruik placeholder images in:



```text

/public/assets/stadium/

```



De gebruiker moet later eenvoudig eigen stadionfoto’s, clubhuizen, lichtmasten etc kunnen vervangen en keuzes kunnen maken



\---



\# Einddoel



De applicatie moet eruitzien als:



\* een premium football management game

\* een interactieve stadion-overview

\* een fotorealistische management interface

\* een cinematic fullscreen ervaring



Niet als een standaard website of dashboard.



