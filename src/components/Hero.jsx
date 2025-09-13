import React, { useEffect } from "react";
import {
  Box,
  Typography,
  Avatar,
  Stack,
  Link,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn"; // ✅ New import

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isDark = theme.palette.mode === "dark";

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

  const iconSize = isMobile ? "small" : "medium";

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
          src="/images/float1.png"
          alt="float1"
          sx={{
            position: "absolute",
            bottom: "40px",
            left: "20px",
            opacity: 1,
            width: { xs: "80px", md: "130px" },
            animation: "float 8s ease-in-out infinite",
          }}
        />
        <Box
          component="img"
          src="/images/float2.png"
          alt="float2"
          sx={{
            position: "absolute",
            bottom: "80px",
            left: "120px",
            opacity: 1,
            width: { xs: "50px", md: "60px" },
            animation: "float 10s ease-in-out infinite",
          }}
        />
        <Box
          component="img"
          src="/images/float3.png"
          alt="float3"
          sx={{
            position: "absolute",
            bottom: "100px",
            left: "200px",
            opacity: 1,
            width: { xs: "40px", md: "32px" },
            animation: "float 12s ease-in-out infinite",
          }}
        />
        <Box
          component="img"
          src="/images/float4.png"
          alt="float4"
          sx={{
            position: "absolute",
            top: "40px",
            right: "40px",
            opacity: 1,
            width: { xs: "80px", md: "120px" },
            animation: "float 8s ease-in-out infinite",
          }}
        />
        <Box
          component="img"
          src="/images/float5.png"
          alt="float5"
          sx={{
            position: "absolute",
            top: "100px",
            right: "120px",
            opacity: 1,
            width: { xs: "40px", md: "58px" },
            animation: "float 10s ease-in-out infinite",
          }}
        />
      </Box>

      {/* Foreground Content */}
      <Stack
        spacing={3}
        alignItems="center"
        sx={{ width: "100%", px: { xs: 2, sm: 4 } }}
      >
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

        <Typography
          variant={isMobile ? "body1" : "h6"}
          sx={{ opacity: 0.8 }}
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Web Developer | HTML, CSS, MUI, Bootstrap, Tailwind, JavaScript, Java,
          MongoDB, React.JS, Node.JS, Express.JS
        </Typography>
        <Typography
          variant={isMobile ? "body1" : "h6"}
          sx={{ opacity: 0.8 }}
          data-aos="fade-up"
          data-aos-delay="400"
        >
          I Am Freelancer.
        </Typography>

        {/* Contact Info with Icons */}
        <Typography
          variant="body2"
          sx={{
            opacity: 0.9,
            display: "flex",
            justifyContent: "center",
            gap: 2,
            flexWrap: "wrap",
            alignItems: "center",
          }}
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <MailOutlineIcon fontSize="small" />
            <span>roshakrs@yahoo.com</span>
          </Stack>
          |
          <Stack direction="row" spacing={1} alignItems="center">
            <MailOutlineIcon fontSize="small" />
            <span>roshankrsingh95@gmail.com</span>
          </Stack>
          |
          <Stack direction="row" spacing={1} alignItems="center">
            <PhoneIcon fontSize="small" />
            <span>+91 7499222022</span>
          </Stack>
          |
          <Stack direction="row" spacing={1} alignItems="center"> {/* ✅ Location added */}
            <LocationOnIcon fontSize="small" />
            <span>Delhi, India</span>
          </Stack>
        </Typography>

        <Stack
          direction="row"
          spacing={4}
          justifyContent="center"
          flexWrap="wrap"
          data-aos="fade-up"
          data-aos-delay="800"
          sx={{ mt: 2 }}
        >
          <Link
            href="https://linkedin.com"
            target="_blank"
            underline="hover"
            sx={{
              color: linkColor,
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              gap: 1,
              fontSize: isMobile ? "0.9rem" : "1.1rem",
            }}
          >
            <LinkedInIcon fontSize={iconSize} />
            LinkedIn
          </Link>
          <Link
            href="https://github.com"
            target="_blank"
            underline="hover"
            sx={{
              color: linkColor,
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              gap: 1,
              fontSize: isMobile ? "0.9rem" : "1.1rem",
            }}
          >
            <GitHubIcon fontSize={iconSize} />
            GitHub
          </Link>
        </Stack>
      </Stack>

      {/* Animation Keyframes */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </Box>
  );
};

export default Hero;
     