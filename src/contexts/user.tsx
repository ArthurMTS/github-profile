import { User } from "@/config/types";
import React from "react";

interface UserContextData {
  user: User | null;
  setUser: (user: User) => void;
}

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserContext = React.createContext({} as UserContextData);

export const UserProvider: React.FC<UserProviderProps> = ({
  children,
}) => {
  const [user, setUser] = React.useState<User | null>(null);

  return (
    <UserContext.Provider
      value={{ user, setUser }}
    >
      {children}
    </UserContext.Provider>
  );
};
