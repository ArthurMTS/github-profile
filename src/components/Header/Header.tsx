import React from "react";
import { useTheme } from "@mui/material/styles";

import {
  HeaderWrapper,
  Title,
  FormWrapper,
  SearchInput,
  SubmitButton,
  ModeSwitch,
} from "./Header.styles";
import { ColorModeContext, UserContext } from "@/contexts";
import { getUser } from "@/utils/user";

export const Header: React.FC = () => {
  const [username, setUsername] = React.useState("");
  const { mode, toggleColorMode } = React.useContext(ColorModeContext);
  const { setUser, setLoading } = React.useContext(UserContext);
  const theme = useTheme();

  const onSwitchButtonClick = () => toggleColorMode();
  const onSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setUsername(event.target.value);
  const onFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setUser(null);
    setLoading(true);
    getUser(username, setUser);
  };

  return (
    <HeaderWrapper sx={{ background: theme.palette.background.default }}>
      <Title sx={{ color: theme.palette.text.primary }}>Github Profiles</Title>
      <FormWrapper onSubmit={onFormSubmit}>
        <SearchInput
          variant="standard"
          sx={{ borderColor: theme.palette.primary.main }}
          placeholder="Inform user name"
          value={username}
          onChange={onSearchInputChange}
          required
        />
        <SubmitButton variant="outlined" type="submit">
          Search
        </SubmitButton>
      </FormWrapper>
      <ModeSwitch
        sx={{ m: 1 }}
        checked={mode === "dark" ? true : false}
        onClick={onSwitchButtonClick}
      />
    </HeaderWrapper>
  );
};
