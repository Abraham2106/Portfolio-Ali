import type { EducatorProfile } from "../../domain/educator-profile";
import { asImageUrl, asTag } from "../../domain/value-objects";

const HERO_PHOTO_URL =
  "https://images.unsplash.com/photo-1746513534315-caa52d3f462c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBlZHVjYXRvciUyMHRlYWNoZXIlMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzMzODI5MTF8MA&ixlib=rb-4.1.0&q=80&w=800";

const MARQUEE_TEXT =
  "DISEÑO CURRICULAR  ?  PEDAGOGÍA WALDORF  ?  EDUCACIÓN INICIAL  ?  JUEGO SIMBÓLICO  ?  DOCENCIA CREATIVA  ?  AMBIENTES DE APRENDIZAJE  ?  ";

/** Educator profile data for the hero section. */
export const EDUCATOR_PROFILE: EducatorProfile = {
  fullName: "Allison Mora",
  displayName: "Allison",
  displaySurname: "Mora",
  roleTitle: "Educadora de Nivel Inicial",
  roleHighlight: "Diseñadora Curricular",
  location: "Buenos Aires, Argentina",
  bio:
    "Apasionada por crear entornos donde cada niño pueda florecer a su propio ritmo. Combino pedagogía activa, juego simbólico y diseño curricular para transformar el aula en un espacio de descubrimiento genuino.",
  tags: [
    asTag("Diseño Curricular"),
    asTag("Nivel Inicial"),
    asTag("Juego Heurístico"),
    asTag("Pedagogía Waldorf"),
  ],
  heroImageUrl: asImageUrl(HERO_PHOTO_URL),
  marqueeText: MARQUEE_TEXT,
};


