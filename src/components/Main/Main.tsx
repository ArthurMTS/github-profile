import { useTheme } from "@mui/material/styles";
import React from "react";

import {
  FormWrapper,
  InfoWrapper,
  MainWrapper,
  SearchInput,
  SubmitButton,
  UserAvatar,
  UserBio,
  UserFullName,
  UserName,
} from "./Main.styles";

export const Main: React.FC = () => {
  const [username, setUsername] = React.useState("");
  const theme = useTheme();

  const onSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setUsername(event.target.value);

  return (
    <MainWrapper>
      <FormWrapper>
        <SearchInput
          sx={{ borderColor: theme.palette.primary.main }}
          placeholder="Inform user name"
          value={username}
          onChange={onSearchInputChange}
        />
        <SubmitButton variant="contained">Search</SubmitButton>
      </FormWrapper>
      <UserAvatar
        src="https://avatars.githubusercontent.com/u/73958393?v=4"
        alt="ArthurMTS"
        sx={{ borderColor: theme.palette.primary.main }}
      />
      <InfoWrapper>
        <UserFullName sx={{ color: theme.palette.text.primary }}>
          Arthur Matheus da Silva
        </UserFullName>
        <UserName sx={{ color: theme.palette.text.secondary }}>
          ArthurMTS
        </UserName>
        <UserBio sx={{ color: theme.palette.text.primary }}>
          Software engineering student at Universidade Federal do Ceará.
        </UserBio>
      </InfoWrapper>
    </MainWrapper>
  );
};
