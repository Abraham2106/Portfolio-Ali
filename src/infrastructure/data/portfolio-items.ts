import type { PortfolioItem } from "../../domain/portfolio-item";
import { asImageUrl, asNum, asPortfolioItemId, asTag, asYear } from "../../domain/value-objects";

const IMG_CLASSROOM =
  "https://images.unsplash.com/photo-1598700476570-320992df06f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc3Jvb20lMjBlZHVjYXRpb24lMjBwcm9qZWN0JTIwY29sb3JmdWx8ZW58MXx8fHwxNzczMzgyOTEyfDA&ixlib=rb-4.1.0&q=80&w=900";
const IMG_CHILDREN =
  "https://images.unsplash.com/photo-1765223111660-cdf94396832a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGxlYXJuaW5nJTIwYWN0aXZpdHklMjBzY2hvb2x8ZW58MXx8fHwxNzczMzgyOTExfDA&ixlib=rb-4.1.0&q=80&w=900";
const IMG_WORKSHOP =
  "https://images.unsplash.com/photo-1766932901295-d4185660341b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzaG9wJTIwYXJ0JTIwa2lkcyUyMGVkdWNhdGlvbmFsfGVufDF8fHx8MTc3MzM4MjkxNHww&ixlib=rb-4.1.0&q=80&w=900";
const IMG_LIBRARY =
  "https://images.unsplash.com/photo-1764173038788-5cf6bcc2a89c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwcmVhZGluZyUyMGJvb2tzJTIwbGlicmFyeSUyMHdhcm18ZW58MXx8fHwxNzczMzgyOTE1fDA&ixlib=rb-4.1.0&q=80&w=900";
const IMG_PENCILS =
  "https://images.unsplash.com/photo-1572045188875-61013d06e517?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMHNjaG9vbCUyMHN1cHBsaWVzJTIwcGVuY2lscyUyMG5vdGVib29rfGVufDF8fHx8MTc3MzM4MjkxN3ww&ixlib=rb-4.1.0&q=80&w=900";

/** Portfolio items displayed in the feed. */
export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: asPortfolioItemId(1),
    variant: "investigacion",
    num: asNum("01"),
    title: "El juego heurístico como herramienta de aprendizaje",
    extract:
      "Investigación sobre el impacto del juego libre con objetos cotidianos en el desarrollo cognitivo y la autonomía de niños de 2 a 4 años en contextos urbanos.",
    tag: asTag("Investigación"),
    year: asYear("2024"),
    featured: true,
  },
  {
    id: asPortfolioItemId(2),
    variant: "foto",
    num: asNum("02"),
    imageUrl: asImageUrl(IMG_CHILDREN),
    tag: asTag("Registro"),
    year: asYear("2024"),
  },
  {
    id: asPortfolioItemId(3),
    variant: "proyecto",
    num: asNum("03"),
    title: "Aula Viva: Rincones de Exploración",
    tag: asTag("Proyecto"),
    year: asYear("2023"),
    imageUrl: asImageUrl(IMG_CLASSROOM),
  },
  {
    id: asPortfolioItemId(4),
    variant: "proyecto",
    num: asNum("04"),
    title: "Taller de Arte con Materiales Naturales",
    tag: asTag("Taller"),
    year: asYear("2024"),
    imageUrl: asImageUrl(IMG_WORKSHOP),
  },
  {
    id: asPortfolioItemId(5),
    variant: "investigacion",
    num: asNum("05"),
    title: "Pedagogía Waldorf en contextos latinoamericanos",
    extract:
      "Análisis comparativo de la metodología Waldorf en escuelas públicas de Argentina, Colombia y México, sus desafíos y adaptaciones culturales.",
    tag: asTag("Investigación"),
    year: asYear("2023"),
  },
  {
    id: asPortfolioItemId(6),
    variant: "foto",
    num: asNum("06"),
    imageUrl: asImageUrl(IMG_LIBRARY),
    tag: asTag("Registro"),
    year: asYear("2023"),
  },
  {
    id: asPortfolioItemId(7),
    variant: "proyecto",
    num: asNum("07"),
    title: "Biblioteca Viva: Cuentos en Movimiento",
    tag: asTag("Proyecto"),
    year: asYear("2025"),
    imageUrl: asImageUrl(IMG_PENCILS),
  },
];


