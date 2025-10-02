import React, { useState } from "react";
import {
  ThemeProvider,
  CssBaseline,
  IconButton,
  Box,
} from "@mui/material";
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
import Team from "./components/Team";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={getTheme(mode)}>
      <CssBaseline />

      {/* Dark/Light toggle button - centered */}
      <div
        style={{
          position: "fixed",
          top: 16,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1500,
          borderRadius: "50%",
          backgroundColor: mode === "light" ? "#fff" : "#000",
          boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
        }}
      >
        <IconButton
          onClick={toggleMode}
          sx={{
            color: mode === "light" ? "black" : "white",
            p: 0.5,
          }}
        >
          {mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
        </IconButton>
      </div>

      {/* Main content wrapper */}
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
        <Team />
        <Education />
        <Contact />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
