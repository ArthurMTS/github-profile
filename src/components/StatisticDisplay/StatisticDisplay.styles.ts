import { styled, Typography } from "@mui/material";

export const StatisticWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
});

export const StatisticTitle = styled(Typography)({
  fontSize: 16,
  "@media(max-width: 790px)": {
    fontSize: 12,
  },
  "@media(max-width: 520px)": {
    fontSize: 10,
  },
});

export const StatisticValue = styled(Typography)({
  fontSize: 24,
  fontWeight: 700,
  "@media(max-width: 790px)": {
    fontSize: 18,
  },
  "@media(max-width: 520px)": {
    fontSize: 16,
  },
});
