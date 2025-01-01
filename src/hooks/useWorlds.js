import { useGenericQuery } from "services/ReactQueryUtils";

export function useWorlds() {
  return useGenericQuery("worlds", "/worlds");
}
