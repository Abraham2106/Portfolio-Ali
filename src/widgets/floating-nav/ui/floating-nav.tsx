import { useAppState } from "../../../app/providers/app-store-provider";
import { NavPill } from "../../../entities/nav";
import { NAV_ITEMS } from "../../../infrastructure/data/nav-items";
import { useScrollToId } from "../../../infrastructure/scroll/use-scroll-to-id";

export function FloatingNav() {
  const { activeSectionId } = useAppState();
  const scrollToId = useScrollToId();

  return (
    <nav
      style={{
        position: "fixed",
        bottom: "28px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 200,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "2px",
          padding: "6px 8px",
          background: "rgba(250,244,237,0.78)",
          backdropFilter: "blur(22px)",
          WebkitBackdropFilter: "blur(22px)",
          border: "1px solid rgba(233,74,106,0.16)",
          borderRadius: "9999px",
          boxShadow: "0 8px 32px rgba(30,18,20,0.1), 0 1px 4px rgba(30,18,20,0.06)",
        }}
      >
        {NAV_ITEMS.map((item) => (
          <NavPill
            key={item.id}
            item={item}
            active={activeSectionId === item.id}
            onClick={() => scrollToId(item.id)}
          />
        ))}
      </div>
    </nav>
  );
}


