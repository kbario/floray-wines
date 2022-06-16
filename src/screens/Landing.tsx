import { Box, Grid, Button, Stack } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";

import Menu from "../components/Menu";
import Page from "../layouts/Page";
import theme from "../theme";

const Landing: FC = () => {
  return (
    <Page sx={{ justifyContent: "center", textAlign: "center" }}>
      <h1>Amazing wine by all standards</h1>
      <p>Consciously made in every way, for you and your future.</p>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: theme.spacing(2),
        }}
      >
        <Link to="our-wine">
          <Button variant="contained" size="large">
            Our wine
          </Button>
        </Link>

        <Link to="about-us">
          <Button variant="outlined" size="large">
            About us
          </Button>
        </Link>
      </Box>
    </Page>
  );
};

export default Landing;
