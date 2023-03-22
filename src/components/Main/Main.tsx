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
import { api } from "@/config/api";
import { UserContext } from "@/contexts";

export const Main: React.FC = () => {
  const [username, setUsername] = React.useState("");
  const { user, setUser } = React.useContext(UserContext);
  const theme = useTheme();

  const onSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setUsername(event.target.value);
  const onFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const result = await api.get(`/${username}`);
    const stars = await api.get(`/${username}/starred`);
    const repos = await api.get(`/${username}/repos`);
    const followers = await api.get(`/${username}/followers`);
    const following = await api.get(`/${username}/following`);
    const user = {
      ...result.data,
      stars: stars.data.length,
      repos_list: repos.data,
      stars_list: stars.data,
      followers_list: followers.data,
      following_list: following.data,
    };
    console.log(user);
    setUser(user);
  };

  return (
    <MainWrapper>
      <FormWrapper onSubmit={onFormSubmit}>
        <SearchInput
          sx={{ borderColor: theme.palette.primary.main }}
          placeholder="Inform user name"
          value={username}
          onChange={onSearchInputChange}
          required
        />
        <SubmitButton variant="contained" type="submit">
          Search
        </SubmitButton>
      </FormWrapper>
      {user ? (
        <React.Fragment>
          <UserAvatar
            src={user?.avatar_url}
            alt={user?.login}
            sx={{ borderColor: theme.palette.primary.main }}
          />
          <InfoWrapper>
            <UserFullName sx={{ color: theme.palette.text.primary }}>
              {user?.name}
            </UserFullName>
            <UserName sx={{ color: theme.palette.text.secondary }}>
              {user?.login}
            </UserName>
            <UserBio sx={{ color: theme.palette.text.primary }}>
              {user?.bio}
            </UserBio>
          </InfoWrapper>
        </React.Fragment>
      ) : (
        ""
      )}
    </MainWrapper>
  );
};
