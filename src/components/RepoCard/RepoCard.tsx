import { useTheme } from "@mui/material/styles";
import React from "react";

import {
  HR,
  RepoCardWrapper,
  RepoDescription,
  RepoLabel,
  RepoLabelWrapper,
  RepoTitle,
} from "./RepoCard.styles";
import { formatedDate } from "@/utils/date";

interface RepoCardProps {
  title: string;
  description?: string;
  language: string;
  updatedAt: string;
  url: string;
}

export const RepoCard: React.FC<RepoCardProps> = ({
  title,
  description,
  language,
  updatedAt,
  url,
}) => {
  const theme = useTheme();

  return (
    <RepoCardWrapper href={url} target="_blank">
      <RepoTitle sx={{ color: theme.palette.primary.main }}>{title}</RepoTitle>
      <RepoDescription sx={{ color: theme.palette.text.secondary }}>
        {description}
      </RepoDescription>
      <RepoLabelWrapper>
        <RepoLabel sx={{ color: theme.palette.text.secondary }}>
          {language}
        </RepoLabel>
        <RepoLabel sx={{ color: theme.palette.text.secondary }}>
          Updated {formatedDate(updatedAt)}
        </RepoLabel>
      </RepoLabelWrapper>
      <HR />
    </RepoCardWrapper>
  );
};
