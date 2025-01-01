import { useQuery } from "@tanstack/react-query";
import api from "./api";

export const useGenericQuery = (queryKey, endpoint, options = {}) => {
  const query = useQuery({
    queryKey: [queryKey, endpoint], 
    queryFn: async () => {
      const response = await api.get(endpoint); 
      return response.data; 
    },
    refetchInterval: 60 * 5 * 1000,
    cacheTime: 1000 * 60 * 5, 
    staleTime: 1000 * 60 * 2, 
    ...options,
  });

  return query; 
};
