import React from "react";
import { Box, Typography, Card, CardContent, useTheme } from "@mui/material";
import { motion } from "framer-motion";

const MotionCard = motion(Card);

const Experience = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      id="experience"
      sx={{
        py: { xs: 4, md: 10 },
        px: { xs: 2, sm: 4 },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        background: isDark
          ? "#000000" // dark mode black
          : "linear-gradient(90deg, #3ae8cb 0%, #efd9d9 100%)", // light mode gradient
        color: isDark ? "#fff" : "#0e0e0e",
      }}
    >
      {/* Heading */}
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        sx={{
          fontWeight: 700,
          mb: { xs: 4, md: 6 },
          fontSize: { xs: "1.8rem", md: "2.2rem" },
          background: isDark
            ? "linear-gradient(90deg, #00ffd5, #00ccaa)"
            : "linear-gradient(90deg, #01594a, #070101)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Experience
      </Typography>

      <MotionCard
        whileHover={{ scale: 1.05, boxShadow: "0px 8px 25px rgba(0,0,0,0.2)" }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        sx={{
          width: "100%",
          maxWidth: 500,
          borderRadius: "20px",
          p: { xs: 1.5, sm: 2 },
          color: isDark ? "#0e0e0e" : "text.primary",
          backgroundColor: isDark ? "#fff" : "transparent",
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              mb: 1,
              fontSize: { xs: "1.2rem", sm: "1.5rem" },
              color: isDark ? "#3ae8cb" : "#00796b",
            }}
          >
            SN Softwares Solution
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 600,
              mb: 1,
              opacity: 0.9,
              fontSize: { xs: "0.9rem", sm: "1rem" },
            }}
          >
            MERN Developer
          </Typography>

          <Typography
            variant="body2"
            sx={{
              opacity: 0.8,
              fontSize: { xs: "0.8rem", sm: "0.95rem" },
            }}
          >
            Oct 2024 – Present
          </Typography>

          <Typography
            variant="body2"
            sx={{
              mt: 2,
              fontSize: { xs: "0.85rem", sm: "1rem" },
            }}
          >
            Working on full-stack web applications using MongoDB, Express.js,
            React, and Node.js.  
            Building scalable APIs, dashboards, and modern UI features.
          </Typography>
        </CardContent>
      </MotionCard>
    </Box>
  );
};

export default Experience;
