import { useTheme } from "@mui/material/styles";
import React from "react";

import {
  InfoWrapper,
  Content,
  MainWrapper,
  UserAvatar,
  UserBio,
  UserName,
  ViewButton,
  DisplayWrapper,
  DataTitle,
  DataValue,
  StatisticsWrapper,
} from "./Main.styles";
import { UserContext } from "@/contexts";

interface DataDisplayProps {
  title: string;
  value: number;
}

const DataDisplay: React.FC<DataDisplayProps> = ({ title, value }) => {
  const theme = useTheme();

  return (
    <DisplayWrapper>
      <DataTitle sx={{ color: theme.palette.text.secondary }}>
        {title}
      </DataTitle>
      <DataValue sx={{ color: theme.palette.text.primary }}>
        {String(value).replace(/(\d{1,3}|\G\d{3})(?=(?:\d{3})+(?!\d))/g, "$1,")}
      </DataValue>
    </DisplayWrapper>
  );
};

export const Main: React.FC = () => {
  const { user } = React.useContext(UserContext);
  const theme = useTheme();

  return (
    <MainWrapper>
      {user ? (
        <React.Fragment>
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
              <DataDisplay title="Seguidores" value={user?.followers} />
              <DataDisplay title="Seguindo" value={user?.following} />
              <DataDisplay title="Repositórios" value={user?.public_repos} />
              <DataDisplay title="Estrelas" value={user?.stars} />
            </StatisticsWrapper>
          </Content>
        </React.Fragment>
      ) : (
        ""
      )}
    </MainWrapper>
  );
};
