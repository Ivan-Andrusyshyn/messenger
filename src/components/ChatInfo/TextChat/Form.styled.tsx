import { Box, TextField, Button } from "@mui/material";
import { styled } from "@mui/system";
import { Send } from "@mui/icons-material";

export const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#ffffff",
  color: "#FF5722",
  height: "30px",
  "&:hover": {
    backgroundColor: "#FF5722",
    color: "#ffffff",
  },
  "&:active": {
    backgroundColor: "#FF5722",
    color: "#ffffff",
  },
}));
export const StyledTextField = styled(TextField)(({ theme }) => ({
  flex: 1,
  marginRight: theme.spacing(1),
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      borderColor: "#FF5722",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#FF5722",
    },
  },
  "& .MuiInputBase-input": {
    padding: "5px 8px",
  },
}));
export const StyledForm = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  position: "absolute",
  width: "340px",
  bottom: "5px",
  left: "10px",
  padding: theme.spacing(1),
  borderRadius: theme.spacing(1),
}));
