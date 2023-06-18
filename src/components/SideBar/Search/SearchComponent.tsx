import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./search.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Avatar } from "@mui/material";
interface Props {
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchComponent: React.FC<Props> = ({ handleOnChange }) => {
  const filtered = useSelector((state: any) => state.contacts.filter);

  const avatarSearch = useSelector((state: any) => state.contacts.avatarSearch);
  const [avatar, setAvatar] = useState("");
  useEffect(() => {
    setAvatar(`https://picsum.photos/id/2${avatarSearch}/200/300`);
  }, [avatarSearch]);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleInputFocus = () => {
    setIsInputFocused(!isInputFocused);
  };

  return (
    <Box sx={{ display: "flex", alignItems: "flex-end", mb: "10px" }}>
      <Avatar
        sx={{ width: "30px", height: "30px", mr: "10px" }}
        src={`${filtered && avatar}`}
      />
      <TextField
        value={filtered}
        id="input-with-sx"
        onChange={handleOnChange}
        label="Search contact"
        variant="standard"
        InputLabelProps={{
          style: {
            fontSize: "14px",
            color: isInputFocused ? "#FF5722" : "",
          },
          className: isInputFocused ? "label-focused" : "",
        }}
        inputProps={{
          onFocus: handleInputFocus,
          onBlur: handleInputFocus,
        }}
      />
    </Box>
  );
};
