import { useMutation } from "@tanstack/react-query";
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

  return useMutation(
    async (loginDetails: LoginMutationBody) => {
      return await axios.post<LoginMutationResponse>(
        `${BASE_URL}/user/login`,
        loginDetails
      );
    },
    {
      onSuccess: (data) => {
        updateAccessToken(data.data.token);
      },
    }
  );
};

export default useLoginMutation;
