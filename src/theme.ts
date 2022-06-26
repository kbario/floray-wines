import {
  PaletteColor,
  PaletteColorOptions,
  PaletteOptions,
  SimplePaletteColorOptions,
} from "@mui/material";
import { createTheme, ThemeOptions } from "@mui/material/styles";
import React from "react";

const components: ThemeOptions["components"] = {
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
};
const palette: PaletteOptions = {
  primary: {
    main: "#284B63",
  },
  secondary: {
    main: "#0F232F",
  },
  bg: {
    main: "#F1F5F9",
  },
  subtitle2: {
    main: "#778DA9",
  },
};
const typography: ThemeOptions["typography"] = {
  title: {
    fontFamily: "EB Garamond",
    fontSize: "4rem",
  },
  floray: {
    fontFamily: "EB Garamond",
    fontSize: "1.5rem",
  },
  subtitle2: {
    fontFamily: "Poppins",
    fontSize: "1.5rem",
    color: palette.subtitle2?.main,
  },
  h1: {
    fontSize: "4rem",
  },
};

const theme = createTheme({
  components,
  palette,
  typography,
});

export default theme;

// palette types
declare module "@mui/material/styles" {
  interface Palette {
    bg?: Palette["primary"];
    gun?: Palette["primary"];
    subtitle2?: Palette["primary"];
  }
  interface PaletteOptions {
    bg?: SimplePaletteColorOptions;
    subtitle2?: SimplePaletteColorOptions;
  }
}

// typography types
declare module "@mui/material/styles" {
  interface TypographyVariants {
    title: React.CSSProperties;
    floray: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    title?: React.CSSProperties;
    floray?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    title: true;
    floray: true;
  }
}
