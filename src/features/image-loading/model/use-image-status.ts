import { useEffect } from "react";
import type { LoadStatus } from "../../../shared/lib/types";
import { useAppDispatch, useAppState } from "../../../app/providers/app-store-provider";

/** Returns image status and handlers for a given id. */
export function useImageStatus(id: number, enabled = true) {
  const { imageStatusById } = useAppState();
  const dispatch = useAppDispatch();
  const status: LoadStatus = imageStatusById[id] ?? "idle";
  const effectiveStatus: LoadStatus = enabled ? status : "loaded";

  useEffect(() => {
    if (!enabled) return;
    if (status === "idle") {
      dispatch({ type: "set-image-status", id, status: "loading" });
    }
  }, [dispatch, enabled, id, status]);

  const onLoad = () => {
    if (!enabled) return;
    dispatch({ type: "set-image-status", id, status: "loaded" });
  };
  const onError = () => {
    if (!enabled) return;
    dispatch({ type: "set-image-status", id, status: "error" });
  };

  return { status: effectiveStatus, onLoad, onError };
}
