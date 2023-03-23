import { UserContext } from "@/contexts";
import { formatedDate } from "@/utils/date";
import { getUser } from "@/utils/user";
import { List, ListItem, ListItemButton, ListItemIcon } from "@mui/material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";
import BookIcon from "@mui/icons-material/Book";
import StarIcon from "@mui/icons-material/Star";
import { useTheme } from "@mui/material/styles";
import React from "react";

import {
  AsideWrapper,
  Button,
  Controls,
  Display,
  Quantity,
  RepoCardWrapper,
  RepoDescription,
  RepoLabelWrapper,
  RepoLabel,
  RepoTitle,
  HR,
  UserCardWrapper,
  UserCardAvatar,
  UserInfoWrapper,
  UserName,
} from "./Aside.styles";
import { User } from "@/config/types";

interface AsideProps {
  user: User;
}

interface RepoCardProps {
  title: string;
  description?: string;
  language: string;
  updatedAt: string;
  url: string;
}

interface UserCardProps {
  avatar: string;
  login: string;
}

const RepoCard: React.FC<RepoCardProps> = ({
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

const UserCard: React.FC<UserCardProps> = ({ avatar, login }) => {
  const { setUser } = React.useContext(UserContext);
  const theme = useTheme();

  const onUserCardClick = () => {
    setUser(null);
    getUser(login, setUser);
  };

  return (
    <UserCardWrapper onClick={onUserCardClick}>
      <UserInfoWrapper>
        <UserCardAvatar src={avatar} alt={login} />
        <UserName sx={{ color: theme.palette.text.primary }}>{login}</UserName>
      </UserInfoWrapper>
      <HR />
    </UserCardWrapper>
  );
};

export const Aside: React.FC<AsideProps> = ({ user }) => {
  const [control, setControl] = React.useState(0);
  const theme = useTheme();

  return (
    <AsideWrapper>
      <Controls variant="permanent" anchor="right" open={true}>
        <List>
          <ListItem
            sx={
              control === 0
                ? { backgroundColor: theme.palette.primary.main }
                : {}
            }
            title="Repositórios"
            disablePadding
            onClick={() => setControl(0)}
          >
            <ListItemButton>
              <ListItemIcon>
                <BookIcon />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem
            sx={
              control === 1
                ? { backgroundColor: theme.palette.primary.main }
                : {}
            }
            title="Estrelas"
            disablePadding
            onClick={() => setControl(1)}
          >
            <ListItemButton>
              <ListItemIcon>
                <StarIcon />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem
            sx={
              control === 2
                ? { backgroundColor: theme.palette.primary.main }
                : {}
            }
            title="Seguidores"
            disablePadding
            onClick={() => setControl(2)}
          >
            <ListItemButton>
              <ListItemIcon>
                <PeopleAltIcon />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem
            sx={
              control === 3
                ? { backgroundColor: theme.palette.primary.main }
                : {}
            }
            title="Seguindo"
            disablePadding
            onClick={() => setControl(3)}
          >
            <ListItemButton>
              <ListItemIcon>
                <PersonPinCircleIcon />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
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
      </Display>
    </AsideWrapper>
  );
};
