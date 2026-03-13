import type { Resource } from "../../domain/resource";
import { asNum } from "../../domain/value-objects";

/** Resource list displayed in the resources section. */
export const RESOURCES: Resource[] = [
  {
    id: 1,
    num: asNum("01"),
    name: "Planeamiento Semanal",
    description: "Sala de 3 años · Editable",
    type: "PDF+DOC",
    accent: "action",
  },
  {
    id: 2,
    num: asNum("02"),
    name: "Carpeta de Proyectos",
    description: "Documentación pedagógica",
    type: "PDF",
    accent: "pedagogy",
  },
  {
    id: 3,
    num: asNum("03"),
    name: "Secuencias Didácticas",
    description: "Nivel Inicial completo",
    type: "PDF+DOC",
    accent: "accent",
  },
  {
    id: 4,
    num: asNum("04"),
    name: "Guía de Observación",
    description: "Desarrollo infantil 0–6",
    type: "PDF",
    accent: "action",
  },
  {
    id: 5,
    num: asNum("05"),
    name: "Registro Anecdótico",
    description: "Plantillas editables",
    type: "DOC",
    accent: "pedagogy",
  },
  {
    id: 6,
    num: asNum("06"),
    name: "Diseño de Ambientes",
    description: "Rincones de exploración",
    type: "PDF",
    accent: "accent",
  },
  {
    id: 7,
    num: asNum("07"),
    name: "Evaluación Formativa",
    description: "Instrumentos de valoración",
    type: "PDF+DOC",
    accent: "identity",
  },
  {
    id: 8,
    num: asNum("08"),
    name: "Planificación Anual",
    description: "Ciclo lectivo 2025",
    type: "PDF",
    accent: "pedagogy",
  },
];


