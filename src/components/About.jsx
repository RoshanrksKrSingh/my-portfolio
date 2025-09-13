import React from "react";
import {
  Box,
  Typography,
  Container,
  Paper,
  useTheme,
  Divider,
} from "@mui/material";

const About = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
        background: isDark
          ? "#000000" // ✅ dark mode section stays black
          : "linear-gradient(90deg, #3ae8cb 0%, #efd9d9 100%)", // light mode gradient (unchanged)
        color: isDark ? "#fff" : "#0e0e0e",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="md">
        {/* Section Heading */}
        <Typography
                  variant="h4"
                  component="h2"
                  gutterBottom
                  sx={{
                    fontWeight: 700,
                    mb: 6,
                    background: isDark
                      ? "linear-gradient(90deg, #00ffd5, #00ccaa)"
                      : "linear-gradient(90deg, #01594a, #070101)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  About Me
                </Typography>

        <Divider
          sx={{
            width: 80,
            height: 3,
            background: isDark ? "#3ae8cb" : "#01594a",
            mx: "auto",
            mb: 5,
            borderRadius: 2,
          }}
        />

        {/* About Card */}
        <Paper
          elevation={4}
          sx={{
            p: { xs: 3, sm: 5 },
            borderRadius: 4,
            backgroundColor: isDark
              ? "#ffffff" // ✅ card pure white in dark mode
              : "rgba(255, 255, 255, 0.6)", // semi-transparent in light mode
            color: "#0e0e0e", // text always dark inside card
            backdropFilter: "blur(12px)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            "&:hover": {
              transform: "translateY(-6px)",
              boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
            },
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.15rem",
              lineHeight: 1.8,
              textAlign: "justify",
              fontWeight: 400,
            }}
          >
            I am passionate about contributing to dynamic and growth-oriented
            organizations by leveraging my expertise in{" "}
            <strong>HTML, CSS, JavaScript, React, Node.js, Express.js,</strong>{" "}
            and <strong>MongoDB</strong> to build responsive, scalable, and
            user-friendly web applications. I continuously enhance my skills in
            modern UI frameworks like{" "}
            <strong>Material UI and Tailwind CSS</strong>, while striving to
            gain valuable professional experience in{" "}
            <strong>full-stack web development</strong>.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default About;