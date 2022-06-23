import { Box, Button, Typography } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";

import theme from "../theme";

const Landing: FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        gap: theme.spacing(4),
        width: "100%",
        height: "100%",
        flexShrink: "0",
      }}
    >
      <Typography variant="h1">Amazing wine by all standards</Typography>
      <Typography variant="subtitle1">
        Consciously made in every way, for you and your future.
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: theme.spacing(2),
        }}
      >
        <Link to="/our-wine">
          <Button variant="contained" size="large">
            Our wine
          </Button>
        </Link>

        <Link to="/about-us">
          <Button variant="outlined" size="large">
            About us
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Landing;
