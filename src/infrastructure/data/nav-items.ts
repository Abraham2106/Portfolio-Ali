import type { NavItem } from "../../domain/nav-item";
import { asNum } from "../../domain/value-objects";

/** Navigation items for the floating nav. */
export const NAV_ITEMS: NavItem[] = [
  { id: "hero", label: "Inicio", num: asNum("01") },
  { id: "feed", label: "Proyectos", num: asNum("02") },
  { id: "recursos", label: "Recursos", num: asNum("03") },
  { id: "contacto", label: "Conectemos", num: asNum("04") },
];


