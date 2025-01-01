import { useGenericQuery } from "services/ReactQueryUtils";

export function useWorld(worldName, options = {}) {
  return useGenericQuery("world", `/world/${worldName}`, options);
}
