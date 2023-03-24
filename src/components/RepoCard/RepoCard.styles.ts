import { Link, styled, Typography } from "@mui/material";

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
