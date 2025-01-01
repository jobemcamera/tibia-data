import { useGenericQuery } from "services/ReactQueryUtils";

export function useWorld(worldName, options = {}) {
  return useGenericQuery(["world", worldName], `/world/${worldName}`, options);
}
