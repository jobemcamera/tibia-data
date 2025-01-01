import { useGenericQuery } from "services/ReactQueryUtils";

export function useCharacter(characterName, options = {}) {
  return useGenericQuery(["character", characterName], `/character/${characterName}`, options);
}
