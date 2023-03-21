import React from "react";
import { useTheme } from "@mui/material/styles";

import { HeaderWrapper, Title, Icon } from "./Header.styles";
import { ColorModeContext } from "@/contexts";
import SwitchClosed from "@/assets/icons/SwitchClosed.svg";
import SwitchOpened from "@/assets/icons/SwitchOpened.svg";

export const Header: React.FC = () => {
  const { mode, toggleColorMode } = React.useContext(ColorModeContext);
  const theme = useTheme();

  const onSwitchButtonClick = () =>
    toggleColorMode();

  return (
    <HeaderWrapper sx={{ background: theme.palette.background.default }}>
      <Title sx={{ color: theme.palette.text.primary }}>Github Profiles</Title>
      <Icon
        src={mode === "light" ? SwitchOpened : SwitchClosed}
        alt="switch"
        onClick={onSwitchButtonClick}
      />
    </HeaderWrapper>
  );
};
