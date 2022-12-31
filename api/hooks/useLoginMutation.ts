import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useAppContext } from "../../contexts/AppContext";
import { BASE_URL } from "../../utils/enums";

export interface LoginMutationResponse {
  token: string;
}

export type LoginMutationBody = {
  email: string;
  password: string;
};

const useLoginMutation = () => {
  const { updateAccessToken } = useAppContext();
  const queryClient = useQueryClient();

  return useMutation(
    async (loginDetails: LoginMutationBody) => {
      return await axios
        .post<LoginMutationResponse>(`${BASE_URL}/user/login`, loginDetails)
        .then((res) => res.data);
    },
    {
      onSuccess: (data) => {
        updateAccessToken(data.token);
        queryClient.invalidateQueries(["profiles"]);
      },
    }
  );
};

export default useLoginMutation;
