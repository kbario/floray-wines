import { Box } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { BoxProps } from "@mui/system";
import { FC } from "react";
import theme from "../theme";

const Page: FC<BoxProps> = ({ children, sx }): JSX.Element => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
        padding: theme.spacing(4),
        backgroundColor: "bg.main",
        gap: theme.spacing(4),
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default Page;
