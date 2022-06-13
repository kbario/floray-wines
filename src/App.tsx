import { ThemeProvider } from "@mui/material/styles";
import Landing from "./screens/Landing";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Landing />
    </ThemeProvider>
  );
}

export default App;
