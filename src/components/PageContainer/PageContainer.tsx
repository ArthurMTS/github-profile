import { useTheme } from "@mui/material/styles";
import { CircularProgress } from "@mui/material";
import React from "react";

import { PageContainerWrapper } from "./PageContainer.styles";
import { Main, Aside } from "@/components";
import { UserContext } from "@/contexts";

export const PageContainer: React.FC = () => {
  const theme = useTheme();
  const { user, loading } = React.useContext(UserContext);

  return (
    <PageContainerWrapper
      sx={[
        { background: theme.palette.background.paper },
        !user ? { alignItems: "center" } : {},
      ]}
    >
      {user ? (
        <React.Fragment>
          <Main user={user} />
          <Aside user={user} />
        </React.Fragment>
      ) : loading ? (
        <CircularProgress size={100} />
      ) : (
        ""
      )}
    </PageContainerWrapper>
  );
};
