import { useTheme } from "@mui/material/styles";
import React from "react";

import { StatisticDisplay } from "@/components";
import {
  InfoWrapper,
  Content,
  MainWrapper,
  UserAvatar,
  UserBio,
  UserName,
  ViewButton,
  StatisticsWrapper,
} from "./Main.styles";
import { User } from "@/config/types";

interface MainProps {
  user: User;
}

export const Main: React.FC<MainProps> = ({ user }) => {
  const theme = useTheme();

  return (
    <MainWrapper>
      <UserAvatar
        src={user?.avatar_url}
        alt={user?.login}
        sx={{ borderColor: theme.palette.primary.main }}
      />
      <Content>
        <InfoWrapper>
          <UserName sx={[{ color: theme.palette.text.primary }]}>
            {user?.name} ({user?.login})
          </UserName>
          <UserBio sx={{ color: theme.palette.text.secondary }}>
            {user?.bio}
          </UserBio>
        </InfoWrapper>
        <StatisticsWrapper>
          <ViewButton
            href={`https://github.com/${user?.login}`}
            target="_blank"
            sx={[
              {
                color: theme.palette.text.primary,
                borderColor: theme.palette.text.primary,
              },
              { "&:hover": { borderColor: theme.palette.primary.main } },
            ]}
          >
            View Github
          </ViewButton>
          <StatisticDisplay title="Seguidores" value={user?.followers} />
          <StatisticDisplay title="Seguindo" value={user?.following} />
          <StatisticDisplay title="Repositórios" value={user?.public_repos} />
          <StatisticDisplay title="Estrelas" value={user?.stars} />
        </StatisticsWrapper>
      </Content>
    </MainWrapper>
  );
};
