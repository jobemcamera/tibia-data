import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_URL = 'https://api.tibiadata.com/v3/world';

const fetchData = async (worldName) => {
  const response = await axios.get(API_URL + `/${worldName}`);
  const result = response?.data?.worlds?.world;

  return result;
}

export function useWorld(worldName) {
  const query = useQuery({
    queryFn: () => fetchData(worldName),
    queryKey: ['world'],
    refetchInterval: 60 * 5 * 1000,
  })

  const world = query.data;

  return { ...query, data: world };
}