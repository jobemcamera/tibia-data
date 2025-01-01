import { useQuery } from "@tanstack/react-query";
import api from "./api";

export const useGenericQuery = (queryKey, endpoint, options = {}) => {
  const query = useQuery({
    queryKey: [queryKey],
    queryFn: async () => {
      const response = await api.get(endpoint);
      return response.data;
    },
    refetchInterval: 60 * 5 * 1000,
    ...options,
  });
  return query;
};
