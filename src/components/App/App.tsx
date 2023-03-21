import React from "react";
import { ThemeProvider } from "@mui/material/styles";

import { Header } from "@/components";
import { getThemeColors } from "@/config/theme";
import { ColorModeContext } from "@/contexts/colorMode";

export const App: React.FC = () => {
  const { mode } = React.useContext(ColorModeContext);

  const theme = React.useMemo(
    () =>
      getThemeColors(mode),
    [mode],
  );

  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
};
