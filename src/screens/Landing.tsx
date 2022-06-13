import { Box, Grid, Button } from "@mui/material";
import { FC } from "react";
import Menu from "../components/Menu";

const Landing: FC = () => {
  return (
    <Grid columns={{ xs: 1, md: 2 }} p={5}>
      <h1>Amazing wine by all standards</h1>
      <p>Consciously made in every way, for you and your future.</p>
      <Grid spacing={"5"}>
        <Button variant="contained" size="large">
          Our wine
        </Button>
        <Button variant="outlined" size="large">
          About us
        </Button>
      </Grid>
    </Grid>
  );
};

export default Landing;
