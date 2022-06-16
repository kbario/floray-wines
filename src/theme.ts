import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0F232F",
    },
    secondary: {
      main: "#F8FAFC",
    },
    bg: {
      main: "#F1F5F9",
    },
  },
  typography: {
    fontFamily: "EB Garamond",
  },
});

export default theme;

declare module "@mui/material/styles" {
  interface Palette {
    bg?: Palette["primary"];
    gun?: Palette["primary"];
  }
  interface PaletteOptions {
    bg?: PaletteOptions["primary"];
  }
}
