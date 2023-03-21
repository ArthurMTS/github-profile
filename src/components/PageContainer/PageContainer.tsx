import { useTheme } from "@mui/material/styles";
import React from "react";

import { PageContainerWrapper } from "./PageContainer.styles";
import { Main } from "@/components";

export const PageContainer: React.FC = () => {
  const theme = useTheme();

  return (
    <PageContainerWrapper sx={{ background: theme.palette.background.paper }}>
      <Main />
    </PageContainerWrapper>
  );
};
