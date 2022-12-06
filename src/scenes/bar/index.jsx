import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";

const Bar = () => {


  return (
    <Box m="20px">
      <Header title="BARTCHART" subtitle="food market data statistics" />

      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};
export default Bar;
