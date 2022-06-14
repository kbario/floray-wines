import { Box, Grid, Button, Stack } from "@mui/material";
import { FC } from "react";
import Menu from "../components/Menu";

const Landing: FC = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1>Amazing wine by all standards</h1>
      <p>Consciously made in every way, for you and your future.</p>
      <Box sx={{direction="row" justifyContent="center" spacing}}>
        <Button variant="contained" size="large">
          Our wine
        </Button>
        <Button variant="outlined" size="large">
          About us
        </Button>
      </Box>
    </Box>
  );
};

export default Landing;
