import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_URL = 'https://api.tibiadata.com/v3/worlds';

const fetchData = async () => {
  const response = await axios.get(API_URL);
  const result = response?.data?.worlds;

  return result;
}

export function useWorlds() {
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ['worlds'],
    refetchInterval: 60 * 5 * 1000,
  })

  const worlds = query.data;

  return { ...query, data: worlds };
}