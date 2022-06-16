import { FC } from "react";
import { Box } from "@mui/material";
import { WineListType } from "../data/WineList";

const WineSection: FC<{ wine: WineListType }> = ({ wine }) => {
  const { name, type, year, tasting, description } = wine;
  return (
    <Box width="100vw" height="50px">
      <p>{name}</p>
    </Box>
  );
};

export default WineSection;
