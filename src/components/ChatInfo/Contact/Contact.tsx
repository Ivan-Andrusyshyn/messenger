import React, { useEffect, useState } from "react";
import { APIEntry } from "../../../storeRedux/sliceRedux/sliceRedux";
import { ThemeProvider } from "@mui/material/styles";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import { useLocation } from "react-router-dom";
import { theme, StyledChip, StyledMdPhone } from "./cont.styled";
import { useSelector, useDispatch } from "react-redux";
import { takeAvatarSrc } from "../../../storeRedux/sliceRedux/sliceRedux";

interface ContactProps {
  contact: APIEntry[];
}

export const Contact: React.FC<ContactProps> = ({ contact }) => {
  const dispatch = useDispatch();
  const avatarSrc = useSelector((state: any) => state.contacts.avatarSrc);
  const { state } = useLocation();
  const num = state && state.num;

  const avatarCheck =
    num !== null ? `https://picsum.photos/id/2${num}/200/300` : avatarSrc;

  useEffect(() => {
    dispatch(takeAvatarSrc(avatarCheck));
  }, [avatarCheck, dispatch]);
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 350,
        bgcolor: "#F7F7F7",
        boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      {contact.map(({ name, phone, id, email }: APIEntry) => (
        <ListItem
          key={name}
          sx={{
            "&:not(:last-child)": {
              borderBottom: "1px solid #E0E0E0",
            },
          }}
        >
          <ListItemAvatar>
            <Avatar alt="Travis Howard" src={`${avatarSrc}`} />
          </ListItemAvatar>
          <ListItemText
            primary={name}
            secondary={phone}
            sx={{
              color: "#222222",
            }}
          />
          <ThemeProvider theme={theme}>
            <StyledChip icon={<StyledMdPhone />} label="Call" />
          </ThemeProvider>
        </ListItem>
      ))}
    </List>
  );
};
