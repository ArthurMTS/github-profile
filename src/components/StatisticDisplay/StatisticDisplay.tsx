import { useTheme } from "@mui/material";

import {
  StatisticTitle,
  StatisticValue,
  StatisticWrapper,
} from "./StatisticDisplay.styles";
import { formatValue } from "@/utils/value";

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
        {formatValue(value)}
      </StatisticValue>
    </StatisticWrapper>
  );
};
