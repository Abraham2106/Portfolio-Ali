import { useEffect } from "react";
import { type PortfolioFilter } from "../../../application/portfolio/filter-portfolio-items";
import { useAppDispatch, useAppState } from "../../../app/providers/app-store-provider";

/** Available filters for the portfolio feed UI. */
export const PORTFOLIO_FILTERS: PortfolioFilter[] = [
  "Todo",
  "Proyectos",
  "Investigaciones",
  "Fotos",
];

/** Returns the current portfolio filter and a setter. */
export function usePortfolioFilter() {
  const { feedFilter } = useAppState();
  const dispatch = useAppDispatch();

  const setFilter = (filter: PortfolioFilter) => {
    dispatch({ type: "set-feed-filter", filter });
  };

  return { activeFilter: feedFilter, setFilter };
}

/** Syncs the portfolio filter to the URL query string. */
export function useUrlSyncedFilter() {
  const { feedFilter } = useAppState();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const initial = params.get("filter");
    if (initial && PORTFOLIO_FILTERS.includes(initial as PortfolioFilter)) {
      dispatch({ type: "set-feed-filter", filter: initial as PortfolioFilter });
    }
  }, [dispatch]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    params.set("filter", feedFilter);
    window.history.replaceState({}, "", `?${params.toString()}`);
  }, [feedFilter]);
}


