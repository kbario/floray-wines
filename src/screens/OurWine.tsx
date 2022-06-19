import { FC } from "react";
import { Box } from "@mui/material";
import WineSection from "../components/WineSection";
import useBlog from "../hooks/useBlog";

const OurWine: FC = () => {
  const wineList = useBlog('*[_type=="wine');
  return (
    <Box>
      poop
      {/*wineList.map((wine, idx, arr) => {
        return <WineSection key={idx} wine={wine} />;
      })*/}
    </Box>
  );
};

export default OurWine;
