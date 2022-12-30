import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { LOCAL_STORAGE_TOKEN } from "../utils/enums";

/**
 * This Provider is used to manage the GraphQL client (endpoint, token...)
 */

/** Hook */

interface AppContextProps {
  accessToken: string | null;
  updateAccessToken: (token: string) => void;
  getUserID: () => number;
}

const AppContext = createContext<AppContextProps>({} as any);

export const useAppContext = () => useContext(AppContext);

/** Provider */

interface AppContextProviderProps {
  children: ReactNode;
}

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    const token = window.localStorage.getItem(LOCAL_STORAGE_TOKEN);
    if (token) {
      setAccessToken(token);
    }
  }, []);

  const updateAccessToken = (token: string) => {
    window.localStorage.setItem(LOCAL_STORAGE_TOKEN, token);
    setAccessToken(token);
  };

  const getUserID = () => {
    const payloadAsB64 = accessToken!.split(".")[1];
    const parsedB64 = Buffer.from(payloadAsB64, "base64");
    const payload = JSON.parse(parsedB64.toString());
    return payload.user_id;
  };

  return (
    <AppContext.Provider
      value={{
        accessToken,
        updateAccessToken,
        getUserID,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
