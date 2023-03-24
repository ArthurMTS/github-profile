import { styled, Typography } from "@mui/material";

export const UserCardWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  cursor: "pointer",
});

export const UserCardAvatar = styled("img")({
  height: 60,
  width: 60,
  borderRadius: "100%",
  border: "3px solid #5F30E6",
});

export const UserInfoWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: 15,
});

export const UserName = styled(Typography)({
  width: 185,
  fontFamily: "Roboto Mono",
  fontSize: 20,
  fontWeight: 400,
  lineHeight: "21.1px",
  letterSpacing: 0,
});

export const HR = styled("hr")({
  borderBottom: "2px solid #5F30E6",
  margin: "11px 0",
});
