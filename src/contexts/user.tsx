import { User } from "@/config/types";
import React from "react";

interface UserContextData {
  user: User | null;
  loading: boolean;
  setUser: (user: User | null) => void;
  setLoading: (value: boolean) => void;
}

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserContext = React.createContext({} as UserContextData);

export const UserProvider: React.FC<UserProviderProps> = ({
  children,
}) => {
  const [user, setUser] = React.useState<User | null>(null);
  const [loading, setLoading] = React.useState(false);

  return (
    <UserContext.Provider
      value={{ user, setUser, loading, setLoading }}
    >
      {children}
    </UserContext.Provider>
  );
};
