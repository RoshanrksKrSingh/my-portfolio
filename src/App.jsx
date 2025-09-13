import React, { useState, useEffect } from "react";
import { ThemeProvider, CssBaseline, IconButton, Box } from "@mui/material";
import { getTheme } from "./theme/theme";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

function App() {
  const [mode, setMode] = useState("light");
  const [isXs, setIsXs] = useState(false);

  const toggleMode = () => {
    setMode(prev => (prev === "light" ? "dark" : "light"));
  };

  // Detect screen width to apply right: 600 only on xs
  useEffect(() => {
    const checkScreenSize = () => {
      setIsXs(window.innerWidth < 576); // Bootstrap-style xs = <576px
    };

    checkScreenSize(); // Run on mount
    window.addEventListener("resize", checkScreenSize); // Update on resize

    return () => window.removeEventListener("resize", checkScreenSize); // Cleanup
  }, []);

  return (
    <ThemeProvider theme={getTheme(mode)}>
      <CssBaseline />

      {/* Dark/Light toggle button */}
      <div
        style={{
          position: "fixed",
          top: 16,
          right: isXs ? 170 : 600, // right: 600 on xs, else right: 16
          zIndex: 1500,
          borderRadius: "50%",
          backgroundColor: mode === "light" ? "#fff" : "#000",
        }}
      >
        <IconButton
          onClick={toggleMode}
          sx={{
            color: mode === "light" ? "black" : "white",
            p: 0,
          }}
        >
          {mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
        </IconButton>
      </div>

      {/* Main content wrapper with theme-aware background and text */}
      <Box
        sx={{
          bgcolor: "background.default",
          color: "text.primary",
          minHeight: "100vh",
        }}
      >
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;