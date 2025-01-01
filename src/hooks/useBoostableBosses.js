import { useGenericQuery } from "services/ReactQueryUtils";

export function useBoostableBosses() {
  return useGenericQuery("boostablebosses", "/boostablebosses");
}
