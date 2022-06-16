import { FC } from "react";
import { Box } from "@mui/material";
import WineSection from "../components/WineSection";
import WineList from "../data/WineList";

const OurWine: FC = () => {
  return (
    <Box>
      {WineList.map((wine, idx, arr) => {
        return <WineSection key={idx} wine={wine} />;
      })}
    </Box>
  );
};

export default OurWine;
