import { FC } from "react";
import { Box } from "@mui/material";
import { PortableText } from "@portabletext/react";
import WineRes from "../types/sanityWine";

const WineSection: FC<{ wine: WineRes }> = ({ wine }) => {
  console.log(wine);
  return (
    <Box>
      <h1>{wine.name}</h1>
      <h3>{wine.year}</h3>
      <h3>{wine.type}</h3>
      <h2>Description</h2>
      <PortableText value={wine.description} />
      <h2>Tasting</h2>
      <PortableText value={wine.tasting} />
    </Box>
  );
};

export default WineSection;
