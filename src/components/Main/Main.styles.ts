import { Button, Link, styled, TextField, Typography } from "@mui/material";

export const MainWrapper = styled("section")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: 30,
});

export const FormWrapper = styled("form")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 30,
});

export const SearchInput = styled(TextField)({
  width: 430,
  "& div": {
    border: 0,
    borderRadius: 20,
    borderColor: "inherit",
  },
  "& input": {
    height: "60px !important",
    padding: "0 22px",
    fontFamily: "Roboto Mono",
    fontSize: 24,
    fontWeight: 500,
    lineHeight: "32px",
    letterSpacing: 0,
  },
  "& fieldset": {
    borderWidth: 5,
    borderStyle: "solid",
    borderColor: "inherit",
    "&:hover": {
      borderColor: "red",
    },
  },
});

export const SubmitButton = styled(Button)({
  height: 60,
  width: 120,
  borderRadius: 20,
  fontFamily: "Roboto Mono",
  fontSize: 24,
  fontWeight: 500,
  lineHeight: "32px",
  letterSpacing: 0,
  textTransform: "capitalize",
});

export const UserAvatar = styled("img")({
  height: 200,
  width: 200,
  borderWidth: 3,
  borderStyle: "solid",
  borderRadius: 100,
  margin: "30px 0",
});

export const InfoWrapper = styled("div")({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: 6,
});

export const UserFullName = styled(Link)({
  fontFamily: "Roboto Mono",
  fontSize: 32,
  fontWeight: 500,
  lineHeight: "38px",
  letterSpacing: 0,
  cursor: "pointer",
  textDecoration: "none",
  transition: "all .2s",
});

export const UserName = styled(Typography)({
  fontSize: 24,
  fontStyle: "italic",
  fontWeight: 400,
  lineHeight: "28px",
  letterSpacing: 0,
});

export const UserBio = styled(Typography)({
  width: 485,
  fontSize: 24,
  fontWeight: 400,
  lineHeight: "28px",
  letterSpacing: -0.05,
});
