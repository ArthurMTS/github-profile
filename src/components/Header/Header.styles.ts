import { Typography } from "@mui/material";
import { styled } from "@mui/system";

export const HeaderWrapper = styled("header")({
  height: 80,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 60px",
});

export const Title = styled(Typography)({
  fontSize: 32,
  fontWeight: 500,
  lineHeight: "38px",
  letterSpacing: 0,
});

export const Icon = styled("img")({
  cursor: "pointer",
});
