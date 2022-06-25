import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
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
  typography: {
    title: {
      fontFamily: "EB Garamond",
      fontSize: "4rem",
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

declare module "@mui/material/styles" {
  interface TypographyVariants {
    title: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    title?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    title: true;
  }
}
