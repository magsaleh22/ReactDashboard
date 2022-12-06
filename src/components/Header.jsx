import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box>
      <Typography
        variant="h3"
        color={colors.grey[300]}
        sx={{ m: "15px 0 5px 20px" }}
      >
        {title}
      </Typography>
      <Typography 
      color={colors.greenAccent[500]} 
      sx={{ m: "15px 0 5px 20px" }}
      >
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
