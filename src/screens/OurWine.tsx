import { FC } from "react";

import { Box } from "@mui/material";

import WineSection from "../components/WineSection";
import useSanity from "../hooks/useBlog";
import WineRes from "../types/sanityWine";

import sortWineList from "../utils/sortWineList";

const OurWine: FC = () => {
  const wineList: WineRes[] = useSanity('*[_type == "wine"]')!;
  const sortedWineList: WineRes[] | undefined = wineList
    ? wineList.sort((a, b) => b.year - a.year)
    : undefined;
  return (
    <Box>
      {sortWineList === undefined && <div>Loading</div>}
      {sortedWineList !== undefined &&
        sortedWineList.map((wine, idx, arr) => {
          return <WineSection key={idx} wine={wine} idx={idx} />;
        })}
    </Box>
  );
};

export default OurWine;
