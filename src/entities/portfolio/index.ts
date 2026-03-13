import { registerPortfolioCard } from "./model/portfolio-card-registry";
import { InvestigationCard } from "./ui/investigation-card";
import { PhotoCard } from "./ui/photo-card";
import { ProjectCard } from "./ui/project-card";

registerPortfolioCard("investigacion", InvestigationCard);
registerPortfolioCard("foto", PhotoCard);
registerPortfolioCard("proyecto", ProjectCard);

export { PortfolioCard } from "./ui/portfolio-card";
export type { PortfolioCardProps } from "./model/portfolio-card-registry";


