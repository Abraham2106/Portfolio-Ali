import type { SocialLink } from "../../domain/social-link";
import { asUrl } from "../../domain/value-objects";

/** Social links for the footer section. */
export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: "linkedin",
    label: "LinkedIn",
    detail: "linkedin.com/in/allism",
    href: asUrl("#"),
  },
  {
    id: "drive",
    label: "Google Drive",
    detail: "Recursos compartidos",
    href: asUrl("#"),
  },
  {
    id: "email",
    label: "Correo",
    detail: "ali.mora@edu.ar",
    href: asUrl("mailto:ali.mora@edu.ar"),
  },
];
