import { styled } from "@mui/material";

export const PageContainerWrapper = styled("main")({
  width: "100%",
  minHeight: "calc(100vh - 70px)",
  display: "flex",
  justifyContent: "center",
  padding: "0 calc(5vw + 60px) 0 5vw",
  gap: "2vw",
  "@media(max-width: 1085px)": {
    flexDirection: "column",
    alignItems: "center",
  },
});
