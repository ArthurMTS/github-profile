import { useTheme } from "@mui/material/styles";
import React from "react";

import {
  HR,
  UserCardAvatar,
  UserCardWrapper,
  UserInfoWrapper,
  UserName,
} from "./UserCard.styles";
import { getUser } from "@/utils/user";
import { UserContext } from "@/contexts";

interface UserCardProps {
  avatar: string;
  login: string;
}

export const UserCard: React.FC<UserCardProps> = ({ avatar, login }) => {
  const { setUser } = React.useContext(UserContext);
  const theme = useTheme();

  const onUserCardClick = () => {
    setUser(null);
    getUser(login, setUser, () => {});
  };

  return (
    <UserCardWrapper onClick={onUserCardClick}>
      <UserInfoWrapper>
        <UserCardAvatar src={avatar} alt={login} />
        <UserName sx={{ color: theme.palette.text.primary }}>{login}</UserName>
      </UserInfoWrapper>
      <HR />
    </UserCardWrapper>
  );
};
