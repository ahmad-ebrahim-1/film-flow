import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

import NavBar from "./components/NavBar";
import Home from "./sections/Home";
import Movies from "./sections/Movies";
import Series from "./sections/Series";
import About from "./sections/About";
import Footer from "./components/Footer";
import SearchResults from "./components/SearchResults";
import "./App.css";

function App() {
  const [isDark, setIsDark] = useState(false);
  const queryClient = new QueryClient();

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
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <CssBaseline />
        <main>
          <NavBar isDark={isDark} setIsDark={setIsDark} />
          <Routes>
            <Route path="/" element={<Home isDark={isDark} />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/series" element={<Series />} />
            <Route path="/about" element={<About />} />
            <Route path="/results" element={<SearchResults />} />
          </Routes>
          <Footer />
        </main>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
