import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import HeaderComp from './components/HeaderComp';
import MemeComp from './components/MemeComp';

const Meme = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  

  return (
    <Box m="20px" >
      <Header title="MEME" subtitle="Generate your funny memes" />
      <HeaderComp />
      <MemeComp />
    </Box>
  );
};

export default Meme;
