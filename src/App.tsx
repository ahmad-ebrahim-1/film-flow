import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Movies from "./components/Movies";
import Series from "./components/Series";
import About from "./components/About";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [isDark, setIsDark] = useState(false);

  const lightTheme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#053B50",
      },
    },
    typography: {
      fontFamily: "'Nunito', 'Lexend', 'Roboto'",
    },
  });
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#64CCC5",
      },
    },
    typography: {
      fontFamily: "'Nunito', 'Lexend', 'Roboto'",
    },
  });

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <CssBaseline />
      <main>
        <NavBar isDark={isDark} setIsDark={setIsDark} />
        <Routes>
          <Route path="/film-flow" element={<Home isDark={isDark} />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </main>
    </ThemeProvider>
  );
}

export default App;
