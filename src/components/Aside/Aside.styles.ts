import { styled } from "@mui/system";
import { Button as MuiButton, Drawer, Link, Typography } from "@mui/material";

export const AsideWrapper = styled("aside")({
  display: "flex",
  flexDirection: "column",
  marginTop: 20,
});

export const Controls = styled(Drawer)({
  "& .MuiPaper-root": {
    paddingTop: 107,
    width: 60,
    overflowX: "hidden",
    "& ul": {
      display: "flex",
      flexDirection: "column",
      gap: 5,
    },
  },
});

export const Display = styled("div")({
  height: 480,
  width: "30vw",
  borderTopLeftRadius: 10,
  borderBottomLeftRadius: 10,
  overflowY: "scroll",
  padding: "18px 16px",
  boxShadow: "2px 2px 5px #000",
});

export const Button = styled(MuiButton)({
  display: "flex",
  justifyContent: "space-between",
  padding: "3px 7px",
});

export const Quantity = styled(Typography)({
  fontSize: 16,
  fontWeight: 400,
  lineHeight: "19px",
  letterSpacing: 0,
  height: 25,
  minWidth: 25,
  borderRadius: "100%",
  padding: 3,
  color: "#EFEFEF",
});

export const RepoCardWrapper = styled(Link)({
  display: "flex",
  flexDirection: "column",
  textDecoration: "none",
  cursor: "pointer",
});

export const RepoTitle = styled(Typography)({
  fontFamily: "Roboto Mono",
  fontSize: 24,
  fontWeight: 400,
  lineHeight: "32px",
  letterSpacing: 0,
});

export const RepoDescription = styled(Typography)({
  fontSize: 16,
  fontWeight: 400,
  lineHeight: "19px",
  letterSpacing: 0,
  marginBottom: 3,
  textAlign: "justify",
});

export const RepoLabelWrapper = styled("div")({
  display: "flex",
  gap: 7,
});

export const RepoLabel = styled(Typography)({
  fontFamily: "Roboto Mono",
  fontSize: 12,
  fontWeight: 400,
  lineHeight: "16px",
  letterSpacing: 0, 
});

export const HR = styled("hr")({
  borderBottom: "2px solid #5F30E6",
  margin: "11px 0",
});

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
