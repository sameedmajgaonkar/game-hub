import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";

interface GameDetail {
  name: string;
  description_raw: string;
}

const apiClient = new APIClient<GameDetail>(`/games`);

const useGame = (slug: string) => {
  return useQuery({
    queryKey: ["game", slug],
    queryFn: () => apiClient.get(slug),
  });
};

export default useGame;
