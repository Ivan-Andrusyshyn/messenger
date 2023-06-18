import { Box, TextField, Button } from "@mui/material";
import { styled } from "@mui/system";
import { Send } from "@mui/icons-material";
export const StyledButton = styled(Button)`
  background-color: #ffffff;
  color: #ff5622d8;
  height: 30px;

  &:hover {
    background-color: #ff5622d8;
    color: #ffffff;
  }

  &:active {
    background-color: #ff5622d8;
    color: #ffffff;
  }
`;
export const StyledTextField = styled(TextField)(({ theme }) => ({
  flex: 1,
  marginRight: theme.spacing(1),
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      borderColor: "#ff5622d8",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#ff5622d8",
    },
  },
  "& .MuiInputBase-input": {
    padding: "5px 8px",
  },
}));
export const StyledForm = styled(Box)`
  display: flex;
  align-items: center;
  position: absolute;
  width: 340px;
  bottom: 5px;
  left: 10px;
  padding: ${({ theme }) => theme.spacing(1)};
  border-radius: ${({ theme }) => theme.spacing(1)};
`;
