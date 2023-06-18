import ListItem from "@mui/material/ListItem";
import { styled } from "@mui/material/styles";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import { randomOnline } from "../supportTS/randomOnline";
import PersonIcon from "@mui/icons-material/Person";

export const CustomListItem = styled(ListItem)`
  background-color: #ff5722;
  color: #ffffff;
  margin-bottom: 10px;
  border: 1px solid #ffc107;
  padding: 5px;
  font-weight: 700;
  display: flex;
  font-size: 8px;
  justify-content: space-between;
  border-radius: 4px;
  transition: background-color, border-color, 0.2s linear;
  &:hover {
    background-color: #ff9800;
    border-color: #4caf50;
  }
`;
export const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));
export const CustomLink = styled(Link)`
  text-decoration: none;
  letter-spacing: 0.2em;
  font-weight: 700;
`;
export const CustomIconButton = styled(IconButton)`
  text-decoration: none;
  letter-spacing: 0.2em;
  width: 12px;
  position: absolute;
  color: #fff;
  font-weight: 700;
  transition: color, transform, 0.3s linear;
  &:hover {
    color: red;
    transform: scale(1.2);
  }
`;
export const CustomContactsIcon = styled(PersonIcon)`
  fill: ${({ theme }) => randomOnline()};
  width: 15px;
  position: absolute;
  right: 2px;
  top: 2px;
`;
