import {
  ListItem as MuiLI,
  ListItemButton,
  ListItemIcon,
  SvgIconTypeMap,
  useTheme,
} from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import React from "react";

interface ListItemProps {
  title: string;
  active: boolean;
  onClick: () => void;
  ListIcon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
}

export const ListItem: React.FC<ListItemProps> = ({
  active,
  onClick,
  ListIcon,
  title,
}) => {
  const theme = useTheme();

  return (
    <MuiLI
      sx={active ? { backgroundColor: theme.palette.primary.main } : {}}
      title={title}
      disablePadding
      onClick={onClick}
    >
      <ListItemButton>
        <ListItemIcon>
          <ListIcon />
        </ListItemIcon>
      </ListItemButton>
    </MuiLI>
  );
};
