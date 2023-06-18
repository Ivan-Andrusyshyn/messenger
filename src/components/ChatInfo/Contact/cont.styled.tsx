import { keyframes } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import MdPhone from "@mui/icons-material/Phone";
import { styled } from "@mui/material/styles";
export const theme = createTheme({
  components: {
    MuiIcon: {
      styleOverrides: {
        root: {
          boxSizing: "content-box",
          padding: 3,
          fontSize: "1.125rem",
        },
      },
    },
  },
});
export const scaleAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }`;
export const StyledChip = styled(Chip)`
  cursor: pointer;
  background-color: #ff5252; /* Red */
  color: #ffffff;
  border-color: #4caf50;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.16);
  transition: background-color 0.2s, border-color 0.2s, box-shadow 0.2s;

  &:hover {
    background-color: #ff4436; /* Darker Red */
    border-color: #4caf50;
    animation: ${scaleAnimation} 0.3s ease-in-out;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.16);
  }
`;

export const StyledMdPhone = styled(MdPhone)`
  fill: #fff;
  transition: color 0.2s;
`;
