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
  "@media(max-width: 1085px)": {
    width: "50vw",
  },
  "@media(max-width: 655px)": {
    width: "70vw",
  },
  "@media(max-width: 520px)": {
    width: "75vw",
  },
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
