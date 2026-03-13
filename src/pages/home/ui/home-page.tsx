import { useActiveSectionTracking } from "../../../features/active-section/model/use-active-section";
import { NAV_ITEMS } from "../../../infrastructure/data/nav-items";
import { CustomCursor } from "../../../widgets/custom-cursor";
import { FloatingNav } from "../../../widgets/floating-nav";
import { FooterSection } from "../../../widgets/footer";
import { HeroSection } from "../../../widgets/hero";
import { FeedSection } from "../../../widgets/feed";
import { ResourcesSection } from "../../../widgets/resources";
import { ScrollProgress } from "../../../widgets/scroll-progress";
import { WaveDivider } from "../../../widgets/wave-divider";

/** Home page composition for the portfolio SPA. */
export function HomePage() {
  useActiveSectionTracking(NAV_ITEMS);

  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <FloatingNav />

      <HeroSection />
      <FeedSection />
      <WaveDivider />
      <ResourcesSection />
      <FooterSection />
    </>
  );
}


