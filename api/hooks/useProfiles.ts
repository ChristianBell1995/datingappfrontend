import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useAppContext } from "../../contexts/AppContext";
import { BASE_URL } from "../../utils/enums";

export interface Profile {
  id: number;
  name: string;
  email: string;
  gender: string;
  age: number;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
}

interface ProfileResponse {
  data: Profile[];
}

export const useProfiles = () => {
  const { accessToken } = useAppContext();
  return useQuery(
    ["profiles"],
    async () => {
      return await axios
        .get<ProfileResponse>(`${BASE_URL}/profiles`, {
          headers: { Authorization: "Bearer " + accessToken },
        })
        .then((res) => res.data);
    },
    {
      enabled: !!accessToken,
    }
  );
};

export default useProfiles;
