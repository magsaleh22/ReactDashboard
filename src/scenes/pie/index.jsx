import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

const Pie = () => {


  return (
    <Box m="20px">
      <Header title="PIECHART" subtitle="Programming languages demands in in the IT market"/>

      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
};
export default Pie;
