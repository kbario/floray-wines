import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontFamily: "EB Garamond",
          fontSize: "60px",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        h1: {
          margin: "0px",
          fontFamily: "EB Garamond",
        },
        h2: {
          margin: "0px",
          fontFamily: "EB Garamond",
        },
        h3: {
          margin: "0px",
          fontFamily: "Poppins",
        },
        h4: {
          margin: "0px",
          fontFamily: "Poppins",
        },
        h5: {
          margin: "0px",
          fontFamily: "Poppins",
        },
        h6: {
          margin: "0px",
          fontFamily: "Poppins",
        },
        p: {
          margin: "0px",
          fontFamily: "Poppins",
        },
        a: {
          margin: "0px",
          FontFace: "Poppins",
          textDecoration: "none",
        },
      },
    },
  },
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
function local(arg0: string) {
  throw new Error("Function not implemented.");
}
