import React from "react";
import { ThemeProvider } from "@mui/material/styles";

import { Header, PageContainer } from "@/components";
import { getThemeColors } from "@/config/theme";
import { ThemeContext } from "@/contexts";

export const App: React.FC = () => {
  const { mode } = React.useContext(ThemeContext);

  const theme = React.useMemo(() => getThemeColors(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <PageContainer />
    </ThemeProvider>
  );
};
