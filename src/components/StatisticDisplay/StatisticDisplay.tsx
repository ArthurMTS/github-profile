import { useTheme } from "@mui/material";

import {
  StatisticTitle,
  StatisticValue,
  StatisticWrapper,
} from "./StatisticDisplay.styles";

interface StatisticDisplayProps {
  title: string;
  value: number;
}

export const StatisticDisplay: React.FC<StatisticDisplayProps> = ({
  title,
  value,
}) => {
  const theme = useTheme();

  return (
    <StatisticWrapper>
      <StatisticTitle sx={{ color: theme.palette.text.secondary }}>
        {title}
      </StatisticTitle>
      <StatisticValue sx={{ color: theme.palette.text.primary }}>
        {String(value).replace(/(\d{1,3}|\G\d{3})(?=(?:\d{3})+(?!\d))/g, "$1,")}
      </StatisticValue>
    </StatisticWrapper>
  );
};
