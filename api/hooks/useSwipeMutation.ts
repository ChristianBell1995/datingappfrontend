import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useAppContext } from "../../contexts/AppContext";
import { BASE_URL } from "../../utils/enums";

export interface SwipeMutationResponse {
  data: {
    match: boolean;
  };
}

export type SwipeMutationBody = {
  swiperId: number;
  preference: "YES" | "NO";
  profileId: number;
};

const useSwipeMutation = () => {
  const { accessToken } = useAppContext();
  return useMutation(async (loginDetails: SwipeMutationBody) => {
    return await axios
      .post<SwipeMutationResponse>(`${BASE_URL}/swipe`, loginDetails, {
        headers: { Authorization: "Bearer " + accessToken },
      })
      .then((res) => res.data);
  });
};

export default useSwipeMutation;
