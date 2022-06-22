import { Box, BoxProps, SxProps } from "@mui/material";
import { FC } from "react";
import Mennu from "../components/Menu";
import theme from "../theme";

const Page: FC<BoxProps> = ({ children, sx }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
        backgroundColor: "bg.main",
      }}
    >
      <Mennu />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: theme.spacing(4),
          gap: theme.spacing(4),
          ...sx,
        }}
      >
        {children && children}
      </Box>
    </Box>
  );
};

export default Page;
