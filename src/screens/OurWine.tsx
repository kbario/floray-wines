import { FC } from "react";
import { Box } from "@mui/material";
import WineSection from "../components/WineSection";
import useSanity from "../hooks/useBlog";
import WineRes from "../types/sanityWine";

const OurWine: FC = () => {
  const wineList: WineRes[] = useSanity('*[_type == "wine"]')!;
  return (
    <Box>
      {wineList?.length === 0 && <div>Loading</div>}
      {wineList !== undefined &&
        wineList.map((wine, idx, arr) => {
          return <WineSection key={idx} wine={wine} />;
        })}
    </Box>
  );
};

export default OurWine;
