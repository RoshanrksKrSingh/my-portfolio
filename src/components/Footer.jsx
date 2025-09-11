import React from "react";
import { Box, Container, Typography, Link, useTheme } from "@mui/material";

const Footer = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        background: isDark
          ? "#000"
          : "linear-gradient(90deg, #3ae8cb 0%, #efd9d9 100%)",
        color: isDark ? "#fff" : "#0e0e0e",
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        <Typography variant="body2" sx={{ fontSize: "0.95rem" }}>
          &copy; {new Date().getFullYear()} Roshan Kumar Singh |{" "}
          <Link
            href="mailto:roshakrs@yahoo.com"
            underline="hover"
            sx={{ color: isDark ? "#ccc" : "#0e0e0e" }}
          >
            Contact Me
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;