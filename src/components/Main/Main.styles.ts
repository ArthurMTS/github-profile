import { Link, styled, Typography } from "@mui/material";

export const MainWrapper = styled("section")({
  display: "flex",
  width: "100%",
  marginTop: 20,
  gap: 30,
});

export const Content = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: 10,
  marginTop: 35,
});

export const ViewButton = styled(Link)({
  height: "fit-content",
  width: "fit-content",
  padding: 10,
  fontFamily: "Roboto Mono",
  fontSize: 16,
  fontWeight: 700,
  letterSpacing: 0,
  textTransform: "capitalize",
  textDecoration: "none",
  borderWidth: 1,
  borderStyle: "solid",
  borderRadius: 5,
  transition: "all .2s",
});


export const UserAvatar = styled("img")({
  height: 150,
  width: 150,
  borderWidth: 4,
  borderStyle: "solid",
  borderRadius: 100,
  boxShadow: "2px 2px 5px #000",
});

export const InfoWrapper = styled("div")({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: 6,
});

export const UserName = styled(Typography)({
  fontFamily: "Roboto Mono",
  fontSize: 32,
  fontWeight: 500,
  lineHeight: "38px",
  letterSpacing: 0,
  textDecoration: "none",
  transition: "all .2s",
});

export const UserBio = styled(Typography)({
  width: 485,
  fontSize: 18,
  fontWeight: 400,
  lineHeight: "28px",
  letterSpacing: -0.05,
});

export const StatisticsWrapper = styled("div")({
  display: "flex",
  gap: 20,
  alignItems: "center",
});

export const DisplayWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
});

export const DataTitle = styled(Typography)({
  fontSize: 16,
});

export const DataValue = styled(Typography)({
  fontSize: 24,
  fontWeight: 700,
});
