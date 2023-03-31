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
  const listItems = ["Repositórios", "Estrelas", "Seguidores", "Seguindo"];
  const icons = [BookIcon, StarIcon, PeopleAltIcon, PersonPinCircleIcon];
  const theme = useTheme();
  let display;

  if (control === 0 || control === 1) {
    const list = control === 0 ? [...user?.repos_list] : [...user?.stars_list];
    display = list.map((repo, index) => (
      <RepoCard
        key={index}
        title={repo?.name}
        description={repo?.description}
        language={repo?.language}
        updatedAt={repo?.updated_at}
        url={repo?.html_url}
      />
    ));
  } else if (control === 2 || control === 3) {
    const list =
      control === 2 ? [...user?.followers_list] : [...user?.following_list];
    display = list.map((following, index) => (
      <UserCard
        key={index}
        avatar={following?.avatar_url}
        login={following?.login}
      />
    ));
  }

  return (
    <AsideWrapper>
      <Controls variant="permanent" anchor="right" open={true}>
        <List>
          {listItems.map((item, index) => (
            <ListItem
              key={index}
              active={control === index}
              title={item}
              onClick={() => setControl(index)}
              ListIcon={icons[index]}
            />
          ))}
        </List>
      </Controls>
      <Display sx={{ background: theme.palette.background.default }}>
        {display}
      </Display>
    </AsideWrapper>
  );
};
