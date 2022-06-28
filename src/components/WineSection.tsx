import { FC, MouseEventHandler, useState } from "react";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  ButtonGroup,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { PortableText } from "@portabletext/react";

import { client } from "../hooks/useBlog";
import WineRes from "../types/sanityWine";
import capitalise from "../utils/capitalise";
import theme from "../theme";
import imageUrlBuilder from "@sanity/image-url";
import { AccordionProps } from "@mui/material";
const builder = imageUrlBuilder(client);

const WineSection: FC<{ wine: WineRes; idx: number }> = ({ wine, idx }) => {
  const isPhone = useMediaQuery(theme.breakpoints.down("sm"));
  const height = "calc(100vh - 150px)";
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <Box sx={{ display: "flex", width: "100%", flexGrow: 1, height }}>
      <Box
        sx={{
          width: isPhone ? "100%" : "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "16px",
          order: idx % 2 === 0 ? 1 : 0,
        }}
      >
        <Typography variant="h1">{wine.name}</Typography>
        <Typography variant="subtitle2">
          {wine.year} {wine.type.toUpperCase()}
        </Typography>
        <Box>
          {wine.description && (
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="accordionHeading">Description</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ maxHeight: "30vh", overflow: "auto" }}>
                <PortableText value={wine.description} />
              </AccordionDetails>
            </Accordion>
          )}

          {wine.tasting && (
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Tasting</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ maxHeight: "30vh", overflow: "auto" }}>
                <PortableText value={wine.tasting} />
              </AccordionDetails>
            </Accordion>
          )}
        </Box>
        <Box sx={{ display: "flex", width: "100%", gap: "16px" }}>
          <Button
            variant="contained"
            disabled={wine.inStock ? false : true}
            sx={{ flexGrow: 1 }}
          >
            {wine.inStock ? "Buy" : "Sold Out"}
          </Button>
          {wine.review && (
            <Button
              href={wine.review.link}
              target="_blank"
              sx={{ flexGrow: 1 }}
              variant="outlined"
            >
              Review
            </Button>
          )}
        </Box>
      </Box>
      {wine.photo?.asset._ref && !isPhone && (
        <Box
          sx={{
            width: "50%",
            display: "flex",
            justifyContent: "center",
            alignContent: " center",
            order: idx % 2 === 0 ? 0 : 1,
          }}
        >
          <img
            src={builder.image(wine.photo?.asset._ref).height(1000).url()}
            alt="wine"
            style={{ height: "70vh", alignSelf: "center" }}
          />
        </Box>
      )}
    </Box>
  );
};

export default WineSection;
