import {
  Container,
  CssBaseline,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import Header from "./Header";
import { useState } from "react";
import { Outlet } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      background : {
        default : darkMode ? "#121212" : "#f5f5f5"
      }
    },
  });

  const toggleTheme = () => setDarkMode(!darkMode);
  return (
    <>
      <ThemeProvider theme={darkTheme}>
      <CssBaseline />
        <Header toggleTheme={toggleTheme} />
        <Container maxWidth="lg">
          <Outlet />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
