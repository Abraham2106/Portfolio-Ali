import { AppStoreProvider } from "./providers/app-store-provider";
import { HomePage } from "../pages/home";

export default function App() {
  return (
    <AppStoreProvider>
      <div className="grain-overlay" aria-hidden="true" />
      <div className="dot-bg dot-bg-layer" aria-hidden="true" />

      <div className="app-shell">
        <HomePage />
      </div>
    </AppStoreProvider>
  );
}


