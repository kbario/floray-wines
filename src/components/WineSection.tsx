import { FC } from "react";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import { PortableText, PortableTextProps } from "@portabletext/react";

import WineRes from "../types/sanityWine";
import capitalise from "../utils/capitalise";

const WineSection: FC<{ wine: WineRes }> = ({ wine }) => {
  return (
    <Box>
      <Typography variant="h1">{wine.name}</Typography>
      <Typography variant="subtitle2">
        {wine.year} {wine.type.toUpperCase()}
      </Typography>

      {wine.description && (
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Description</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <PortableText value={wine.description} />
          </AccordionDetails>
        </Accordion>
      )}

      {wine.tasting && (
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Tasting</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <PortableText value={wine.tasting} />
          </AccordionDetails>
        </Accordion>
      )}
    </Box>
  );
};

export default WineSection;
