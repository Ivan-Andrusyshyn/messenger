import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import { useEffect } from "react";
import { CustomIconButton } from "./list.styled";
import DeleteIcon from "@mui/icons-material/Delete";
import * as React from "react";
import {
  CustomContactsIcon,
  Demo,
  CustomListItem,
  CustomLink,
} from "./list.styled";
import "./listItem.css";
interface ListContactProps {
  name: string;
  handleDeleteClick: (contactId: string) => void;
  num: number;
  takeAvatar: (id: number) => void;
}

export const AlignItemsList: React.FC<ListContactProps> = ({
  name,
  handleDeleteClick,
  num,
  takeAvatar,
}) => {
  useEffect(() => {
    takeAvatar(num);
  }, [num, takeAvatar]);

  return (
    <>
      <CustomLink to={`${name}`} className="contact" state={{ num: num }}>
        <Grid item xs={12} md={6}>
          <Demo>
            <CustomListItem
              secondaryAction={
                <CustomIconButton
                  aria-label="delete"
                  size="small"
                  onClick={() => handleDeleteClick(name)}
                >
                  <DeleteIcon fontSize="inherit" />
                </CustomIconButton>
              }
            >
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar n°${num}`}
                  src={`https://picsum.photos/id/2${num}/200/300`}
                />
              </ListItemAvatar>
              <ListItemText primary={name && name.slice(0, 17)} secondary="" />
              <CustomContactsIcon fontSize="small" />
            </CustomListItem>
          </Demo>
        </Grid>
      </CustomLink>
    </>
  );
};
