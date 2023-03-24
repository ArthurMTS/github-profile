import { List, useTheme } from "@mui/material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";
import BookIcon from "@mui/icons-material/Book";
import StarIcon from "@mui/icons-material/Star";
import React from "react";

import { ListItem, RepoCard, UserCard } from "@/components";
import { AsideWrapper, Controls, Display } from "./Aside.styles";
import { User } from "@/config/types";

interface AsideProps {
  user: User;
}

export const Aside: React.FC<AsideProps> = ({ user }) => {
  const [control, setControl] = React.useState(0);
  const theme = useTheme();

  return (
    <AsideWrapper>
      <Controls variant="permanent" anchor="right" open={true}>
        <List>
          <ListItem
            active={control === 0}
            title="Repositórios"
            onClick={() => setControl(0)}
            ListIcon={BookIcon}
          />
          <ListItem
            active={control === 1}
            title="Estrelas"
            onClick={() => setControl(1)}
            ListIcon={StarIcon}
          />
          <ListItem
            active={control === 2}
            title="Seguidores"
            onClick={() => setControl(2)}
            ListIcon={PeopleAltIcon}
          />
          <ListItem
            active={control === 3}
            title="Seguindo"
            onClick={() => setControl(3)}
            ListIcon={PersonPinCircleIcon}
          />
        </List>
      </Controls>
      <Display sx={{ background: theme.palette.background.default }}>
        {control === 0
          ? user?.repos_list.map((repo, index) => (
              <RepoCard
                key={index}
                title={repo?.name}
                description={repo?.description}
                language={repo?.language}
                updatedAt={repo?.updated_at}
                url={repo?.html_url}
              />
            ))
          : ""}
        {control === 1
          ? user?.stars_list.map((repo, index) => (
              <RepoCard
                key={index}
                title={repo?.name}
                description={repo?.description}
                language={repo?.language}
                updatedAt={repo?.updated_at}
                url={repo?.html_url}
              />
            ))
          : ""}
        {control === 2
          ? user?.followers_list.map((follower, index) => (
              <UserCard
                key={index}
                avatar={follower?.avatar_url}
                login={follower?.login}
              />
            ))
          : ""}
        {control === 3
          ? user?.following_list.map((following, index) => (
              <UserCard
                key={index}
                avatar={following?.avatar_url}
                login={following?.login}
              />
            ))
          : ""}
      </Display>
    </AsideWrapper>
  );
};
