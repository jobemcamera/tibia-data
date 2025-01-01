import { useGenericQuery } from "services/ReactQueryUtils";

export function useCreatures() {
  return useGenericQuery("creatures", "/creatures");
}
