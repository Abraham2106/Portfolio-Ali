# Refactor Plan — Portfolio Educativo (React + Vite + TS)

## Resumen ejecutivo
El proyecto fue reorganizado con Feature-Sliced Design y Clean Architecture para separar datos, lógica y UI. Se formalizó un design system con tokens tipados y CSS custom properties, se extrajo la lógica de scroll/IO/RAF a hooks de infraestructura, y se centralizó el estado compartido con Context + Reducer. El objetivo es mantener el UI intacto y habilitar evolución sin acoplamientos.

## Estructura
- FSD: `shared ? entities ? features ? widgets ? pages ? app`.
- Clean Architecture: `domain` (tipos puros), `application` (casos de uso), `infrastructure` (adaptadores DOM), `presentation` (React).

## Design System
- Tokens en `src/shared/design-system/tokens.ts` y `theme.css`.
- Clases globales en `global.css` (reveal, card-lift, marquee, etc).
- Variantes con `class-variance-authority` en `src/shared/lib/variants.ts`.

## Estado global
- `AppStoreProvider` expone `activeSectionId`, `feedFilter` e `imageStatusById`.
- El filtro se sincroniza con `URLSearchParams` sin router.

## Performance
- RAF en cursor condicionado por `visibilitychange`.
- Lazy loading en imágenes del feed.
- CSS global extraído del render de `App`.

## Testing sugerido
- Unit: `filterPortfolioItems`, `computeScrollProgress`, `getActiveSection`, `isInViewport`.
- Component: `FeedSection`, `FloatingNav`, `ImageWithFallback`.
- E2E: navegación por secciones y persistencia de filtro en URL.

