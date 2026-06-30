# Belaléa Web

React/Vite landing page for Belaléa, inspired by the supplied Figma Market design link.
The project includes a responsive homepage, interactive header, decorative SVG hero area,
product cards, partner benefits, news cards, and a contact call to action.

> Note: the Figma URL was not directly readable from this environment, so the current
> implementation uses the available Belaléa branding/product context and local SVG assets.
> Exact exported imagery from Figma can be dropped into `src/assets` and connected to the
> existing components.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Features

- Belaléa logo (SVG)
- Navigation: О нас, КАТАЛОГ (dropdown), Дилерам, Новости
- Pill-shaped search bar with green search button
- Контакты contact button
- Hover and active states on all interactive elements
- 1920x898 below-header SVG hero visual
- Product, dealer, news, and contact sections
- Responsive CSS for desktop, tablet, and mobile layouts

## Build

```bash
npm run build
```
