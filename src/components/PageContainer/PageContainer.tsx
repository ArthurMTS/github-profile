import { useTheme } from "@mui/material/styles";
import React from "react";

import { PageContainerWrapper } from "./PageContainer.styles";
import { Main, Aside } from "@/components";
import { UserContext } from "@/contexts";

export const PageContainer: React.FC = () => {
  const theme = useTheme();
  const { user } = React.useContext(UserContext);

  return (
    <PageContainerWrapper sx={{ background: theme.palette.background.paper }}>
      <Main />
      {user ? <Aside /> : ""}
    </PageContainerWrapper>
  );
};
