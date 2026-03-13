import * as React from "react";
import type { SectionId } from "../../domain/nav-item";
import type { PortfolioFilter } from "../../application/portfolio/filter-portfolio-items";
import type { LoadStatus } from "../../shared/lib/types";

/** Global app state shared across widgets. */
export interface AppState {
  /** Active section id for nav and progress. */
  activeSectionId: SectionId;
  /** Active filter for the portfolio feed. */
  feedFilter: PortfolioFilter;
  /** Image load status indexed by item id. */
  imageStatusById: Record<number, LoadStatus>;
}

/** All actions supported by the global app store. */
export type AppAction =
  | { type: "set-active-section"; sectionId: SectionId }
  | { type: "set-feed-filter"; filter: PortfolioFilter }
  | { type: "set-image-status"; id: number; status: LoadStatus };

const AppStateContext = React.createContext<AppState | null>(null);
const AppDispatchContext = React.createContext<React.Dispatch<AppAction> | null>(null);

/** Reducer for the app store. */
export function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case "set-active-section":
      return { ...state, activeSectionId: action.sectionId };
    case "set-feed-filter":
      return { ...state, feedFilter: action.filter };
    case "set-image-status":
      return {
        ...state,
        imageStatusById: { ...state.imageStatusById, [action.id]: action.status },
      };
    default:
      return state;
  }
}

/** Provides global app state and dispatch. */
export function AppStoreProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = React.useReducer(appReducer, {
    activeSectionId: "hero",
    feedFilter: "Todo",
    imageStatusById: {},
  });

  return (
    <AppDispatchContext.Provider value={dispatch}>
      <AppStateContext.Provider value={state}>{children}</AppStateContext.Provider>
    </AppDispatchContext.Provider>
  );
}

/** Reads the app state. */
export function useAppState() {
  const ctx = React.useContext(AppStateContext);
  if (!ctx) throw new Error("useAppState must be used inside AppStoreProvider");
  return ctx;
}

/** Dispatches actions to the app store. */
export function useAppDispatch() {
  const ctx = React.useContext(AppDispatchContext);
  if (!ctx) throw new Error("useAppDispatch must be used inside AppStoreProvider");
  return ctx;
}


