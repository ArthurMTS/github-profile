import { UserContext } from "@/contexts";
import { formatedDate } from "@/utils/date";
import { getUser } from "@/utils/user";
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

interface ControlButtonProps {
  label: string;
  quantity: number;
  onClick?: () => void;
  sx: {};
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

const ControlButton: React.FC<ControlButtonProps> = ({
  label,
  quantity,
  onClick,
  sx,
}) => {
  const theme = useTheme();

  return (
    <Button
      onClick={onClick}
      sx={[
        {
          "&:hover": {
            backgroundColor: theme.palette.background.paper,
          },
        },
        sx,
      ]}
    >
      <span>{label}</span>{" "}
      <Quantity
        sx={{
          background: theme.palette.primary.main,
        }}
      >
        {quantity}
      </Quantity>
    </Button>
  );
};

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

  return (
    <UserCardWrapper onClick={() => getUser(login, setUser)}>
      <UserInfoWrapper>
        <UserCardAvatar src={avatar} alt={login} />
        <UserName sx={{ color: theme.palette.text.primary }}>{login}</UserName>
      </UserInfoWrapper>
      <HR />
    </UserCardWrapper>
  );
};

export const Aside: React.FC = () => {
  const [control, setControl] = React.useState(0);
  const { user } = React.useContext(UserContext);
  const theme = useTheme();

  return (
    <AsideWrapper>
      <Controls sx={{ background: theme.palette.background.default }}>
        <ControlButton
          sx={
            control === 0
              ? { backgroundColor: theme.palette.background.paper }
              : {}
          }
          label="Repositórios"
          quantity={user?.public_repos || 0}
          onClick={() => setControl(0)}
        />
        <ControlButton
          sx={
            control === 1
              ? { backgroundColor: theme.palette.background.paper }
              : {}
          }
          label="Seguidores"
          quantity={user?.followers || 0}
          onClick={() => setControl(1)}
        />
        <ControlButton
          sx={
            control === 2
              ? { backgroundColor: theme.palette.background.paper }
              : {}
          }
          label="Seguindo"
          quantity={user?.following || 0}
          onClick={() => setControl(2)}
        />
        <ControlButton
          sx={
            control === 3
              ? { backgroundColor: theme.palette.background.paper }
              : {}
          }
          label="Estrelas"
          quantity={user?.stars || 0}
          onClick={() => setControl(3)}
        />
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
          ? user?.followers_list.map((follower, index) => (
              <UserCard
                key={index}
                avatar={follower?.avatar_url}
                login={follower?.login}
              />
            ))
          : ""}
        {control === 2
          ? user?.following_list.map((following, index) => (
              <UserCard
                key={index}
                avatar={following?.avatar_url}
                login={following?.login}
              />
            ))
          : ""}
        {control === 3
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
