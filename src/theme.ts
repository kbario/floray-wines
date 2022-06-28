import { PaletteColorOptions, PaletteOptions } from "@mui/material";
import {
  createTheme,
  responsiveFontSizes,
  SimplePaletteColorOptions,
  ThemeOptions,
} from "@mui/material/styles";
import React from "react";

const components: ThemeOptions["components"] = {
  MuiCssBaseline: {
    styleOverrides: {
      h1: {
        margin: "0px",
        fontFamily: "EB Garamond",
        fontSize: "2.5rem",
      },
      h2: {
        margin: "0px",
        fontFamily: "EB Garamond",
        fontSize: "2rem",
      },
      h3: {
        margin: "0px",
        fontFamily: "EB Garamond",
        fontSize: "1.5rem",
      },
      h4: {
        margin: "0px",
        fontFamily: "Poppins",
        fontSize: "1.5rem",
      },
      h5: {
        margin: "0px",
        fontFamily: "EB Garamond",
        fontSize: "1rem",
      },
      h6: {
        margin: "0px",
        fontFamily: "Poppins",
        fontSize: "1rem",
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
      li: {
        listStyleType: "circle",
        listStylePosition: "inside",
        fontFamily: "Poppins",
      },
    },
  },
};
const palette: ThemeOptions["palette"] = {
  primary: {
    main: "#284B63",
  },
  secondary: {
    main: "#0F232F",
  },
  bg: {
    main: "#F1F5F9",
  },
  blue: {
    main: "#284B63",
  },
  gun: {
    main: "#153243",
  },
};
const typography: ThemeOptions["typography"] = {
  title: {
    fontFamily: "EB Garamond",
    fontSize: "4rem",
  },
  blogTitle: {
    fontFamily: "EB Garamond",
    fontSize: "3rem",
    color: palette.gun?.main,
  },
  floray: {
    fontFamily: "EB Garamond",
    fontSize: "1.5rem",
  },
  subtitle2: {
    fontFamily: "Poppins",
    fontSize: "1.5rem",
    color: palette.blue?.main,
  },
  h1: {
    fontSize: "5rem",
  },
  h2: {
    fontSize: "4rem",
  },
  h3: {
    fontSize: "3rem",
  },
  h4: {
    fontSize: "2rem",
  },
  h5: {
    fontSize: "1.5rem",
  },
  h6: {
    fontSize: "1rem",
  },
};

const theme = responsiveFontSizes(
  createTheme({
    components,
    palette,
    typography,
  })
);

export default theme;

// palette types
declare module "@mui/material/styles" {
  interface Palette {
    bg?: Palette["primary"];
    gun?: Palette["primary"];
    subtitle2?: Palette["primary"];
  }
  interface PaletteOptions {
    bg?: PaletteColorOptions;
    blue?: SimplePaletteColorOptions;
    gun?: SimplePaletteColorOptions;
  }
}

// typography types
declare module "@mui/material/styles" {
  interface TypographyVariants {
    title: React.CSSProperties;
    floray: React.CSSProperties;
    subtitle2: React.CSSProperties;
    accordionHeading: React.CSSProperties;
    blogTitle: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    title?: React.CSSProperties;
    floray?: React.CSSProperties;
    accordianHeading?: React.CSSProperties;
    blogTitle: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    title: true;
    floray: true;
    accordionHeading: true;
    blogTitle: true;
  }
}
