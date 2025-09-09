import React, { useEffect } from "react";
import { Box, Typography, Avatar, Stack, Link, useMediaQuery, useTheme } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isDark = theme.palette.mode === "dark";

  // Init AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  const heroBg = isDark
    ? "#000000"
    : "linear-gradient(90deg, #3ae8cb 0%, #efd9d9 100%)";
  const linkColor = isDark ? "#fff" : "#000";

  return (
    <Box
      id="hero"
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: heroBg,
        textAlign: "center",
        color: isDark ? "#fff" : "inherit",
        pt: { xs: "64px", sm: "64px" },
        px: 0,
        overflow: "hidden",
      }}
    >
      {/* Floating Background Images */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: -1,
          pointerEvents: "none",
        }}
      >
        <Box
          component="img"
          src="/float1.png"
          alt="float1"
          className="animate-float-slow"
          sx={{
            position: "absolute",
            bottom: "540px",
            left: "720px",
            opacity: 0.4,
            width: { xs: "80px", md: "130px" },
          }}
        />
        <Box
          component="img"
          src="/float2.png"
          alt="float2"
          className="animate-float-slower"
          sx={{
            position: "absolute",
            bottom: "540px",
            left: "720px",
            opacity: 0.4,
            width: { xs: "50px", md: "60px" },
          }}
        />
        <Box
          component="img"
          src="/float3.png"
          alt="float3"
          className="animate-float-slowest"
          sx={{
            position: "absolute",
            bottom: "540px",
            left: "720px",
            opacity: 0.4,
            width: { xs: "40px", md: "32px" },
          }}
        />
        <Box
          component="img"
          src="/float4.png"
          alt="float4"
          className="animate-float-slow"
          sx={{
            position: "absolute",
            top: "400px",
            left: 0,
            opacity: 0.4,
            width: { xs: "80px", md: "120px" },
          }}
        />
        <Box
          component="img"
          src="/float5.png"
          alt="float5"
          className="animate-float-slower"
          sx={{
            position: "absolute",
            top: "400px",
            left: 0,
            opacity: 0.4,
            width: { xs: "40px", md: "58px" },
          }}
        />
      </Box>

      {/* Foreground Content */}
      <Stack
        spacing={3}
        alignItems="center"
        sx={{ width: "100%", px: { xs: 2, sm: 4 } }}
      >
        {/* Profile Image */}
        <Avatar
          alt="Roshan Kumar Singh"
          src="/profile.jpg"
          data-aos="zoom-in"
          sx={{
            width: isMobile ? 120 : 150,
            height: isMobile ? 120 : 150,
            border: "5px solid #00ffd5",
            transition: "transform 0.5s",
            "&:hover": { transform: "scale(1.1)" },
          }}
        />

        {/* Name */}
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          data-aos="fade-up"
          data-aos-delay="200"
          sx={{
            fontWeight: 700,
            mb: 4,
            background: isDark
              ? "none"
              : "linear-gradient(90deg, #01594aff, #070101ff)",
            WebkitBackgroundClip: isDark ? "unset" : "text",
            WebkitTextFillColor: isDark ? "#fff" : "transparent",
          }}
        >
          Roshan Kumar Singh
        </Typography>

        {/* Skills */}
        <Typography
          variant={isMobile ? "body1" : "h6"}
          sx={{ opacity: 0.8 }}
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Web Developer | HTML, CSS, MUI, Bootstrap, Tailwind, JavaScript,
          Java, MongoDB, React.JS, Node.JS, Express.JS
        </Typography>

        {/* Contact */}
        <Typography
          variant="body2"
          sx={{ opacity: 0.9 }}
          data-aos="fade-up"
          data-aos-delay="600"
        >
          roshakrs@yahoo.com | +91 7499222022 | Delhi, India
        </Typography>

        {/* Links */}
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          flexWrap="wrap"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <Link
            href="https://linkedin.com"
            target="_blank"
            underline="hover"
            sx={{ color: linkColor, fontWeight: "bold" }}
          >
            LinkedIn
          </Link>
          <Link
            href="https://github.com"
            target="_blank"
            underline="hover"
            sx={{ color: linkColor, fontWeight: "bold" }}
          >
            GitHub
          </Link>
        </Stack>
      </Stack>

      {/* Floating Animation Styles */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-float-slow {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-slower {
          animation: float 10s ease-in-out infinite;
        }
        .animate-float-slowest {
          animation: float 12s ease-in-out infinite;
        }
      `}</style>
    </Box>
  );
};

export default Hero;
