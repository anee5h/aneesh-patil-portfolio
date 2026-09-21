---
title: Meguruto
projectSlug: meguruto
locale: en
summary: A travel discovery product for people in Japan who want to decide where to go next with more context than a list of destinations.
status: building
published: true
featured: true
stack:
  - React 19
  - TypeScript
  - React Router 7
  - Tailwind CSS 4
  - Vite 8
  - Supabase
  - Open-Meteo
  - Leaflet
  - react-leaflet
  - "@react-map/japan"
  - i18next
  - Vitest
  - Playwright
  - Cloudflare Pages
year: 2026
role: Developer
logo: ../../../assets/meguruto/logo.svg
cover: ../../../assets/meguruto/meguruto-en.png
coverAlt: Meguruto's trip discovery screen with travel preferences and destination matches.
screenshots:
  - image: ../../../assets/meguruto/meguruto-en-mobile.png
    alt: Meguruto's mobile trip discovery interface showing travel preferences and destination matches.
    caption: The mobile flow keeps travel preferences, conditions, and matches in one view.
architecture:
  image: ../../../assets/meguruto/architecture.svg
  alt: Diagram of Meguruto's browser, React application, Supabase data, external services, and Cloudflare Pages deployment.
  caption: The main application and data services behind Meguruto.
links:
  github: https://github.com/anee5h/trip-planner
  website: https://meguruto.app
---

## What Meguruto does

Meguruto is a bilingual travel discovery product for people living in Japan. It helps when someone wants a day trip or weekend away but has not decided where to go based on their available time, transport, and preferred kind of experience.

The product is still under development. I am documenting the decisions behind it and the questions that remain, rather than making claims about usage or growth.

## My role and technology choices

I am building the product end to end: interface, routing, data flow, and deployment. The frontend uses React and TypeScript. Supabase stores application data, mapping tools provide geographic context, and Open-Meteo provides weather data. I use Vitest and Playwright to check the product as it changes.

## Engineering challenges

### Estimating travel time without false precision

Distance alone cannot answer “can I get there this weekend?” Transport options, regional differences, and incomplete route data all affect the result. Meguruto presents travel time as an estimate with its assumptions, rather than a precise-looking number.

### Making recommendations with incomplete data

Destination data is useful only when its quality and limits are visible. Meguruto combines catalogue data, maps, weather, and user intent without hiding uncertainty behind a polished screen.

## Current status and limitations

Meguruto is in active development. I still need to validate its recommendations, transport estimates, and catalogue coverage before making stronger product claims.
