import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AboutUs from "./screens/AboutUs";
import Contact from "./screens/Contact";
import Gallery from "./screens/Gallery";
import Landing from "./screens/Landing";
import OurWine from "./screens/OurWine";
import Blog from "./screens/Blog";

import theme from "./theme";
import Page from "./layouts/Page";
import "typeface-eb-garamond";
import "typeface-poppins";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Page>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/our-wine" element={<OurWine />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </Page>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
