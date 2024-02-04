import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_URL = 'https://api.tibiadata.com/v3/character/';

const fetchData = async (characterName) => {
  const response = await axios.get(API_URL + `${characterName}`);
  const result = response?.data?.characters;
  return result;
}

export function useCharacter(characterName) {
  const query = useQuery({
    queryFn: () => fetchData(characterName),
    queryKey: ['character', characterName],
    refetchInterval: 60 * 5 * 1000,
  })

  const character = query.data;

  return { ...query, data: character };
}