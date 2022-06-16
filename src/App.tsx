import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AboutUs from "./screens/AboutUs";
import Contact from "./screens/Contact";
import Gallery from "./screens/Gallery";
import Landing from "./screens/Landing";
import OurWine from "./screens/OurWine";

import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-wine" element={<OurWine />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
