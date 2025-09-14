import React, { useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  useTheme,
} from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import AppShortcutIcon from "@mui/icons-material/AppShortcut";
import CodeIcon from "@mui/icons-material/Code";

const teamMembers = [
  {
    icon: <DeveloperModeIcon fontSize="large" />,
    title: "Blockchain Developer",
    name: "Ayush Rai",
    experience: "3+ Years Experience at Moboloite",
    skills: "Solidity, Web3.js, Smart Contracts, Ethereum",
  },
  {
    icon: <CodeIcon fontSize="large" />,
    title: "MERN Stack Developer",
    name: "Suraj Kumar Yadav",
    experience: "2+ Years Experience at Moboloite",
    skills: "MongoDB, Express.js, React, Node.js",
  },
  {
    icon: <AppShortcutIcon fontSize="large" />,
    title: "Mobile App Developer",
    name: "Prince Sharma",
    experience: "3+ Years Experience at Moboloite",
    skills: "Flutter, React Native, Kotlin, Swift",
  },
];

const Team = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Box
      id="team"
      sx={{
        background: isDark
          ? "#000"
          : "linear-gradient(90deg, #3ae8cb 0%, #efd9d9 100%)",
        py: { xs: 4, md: 10 },
        overflow: "hidden",
        color: isDark ? "#fff" : "#0e0e0e",
      }}
    >
      <Container maxWidth="xxl">
        <Typography
          variant="h4"
          align="center"
          fontWeight={700}
          gutterBottom
          sx={{
            mb: 6,
            fontSize: { xs: "1.8rem", md: "2.5rem" },
            background: isDark
              ? "linear-gradient(90deg, #00ffd5, #00ccaa)"
              : "linear-gradient(90deg, #01594a, #070101)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Our Team
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {teamMembers.map((member, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 300}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Card
                elevation={3}
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  p: 4,
                  borderRadius: 3,
                  maxWidth: 300,
                  backgroundColor: isDark ? "#fff" : "transparent",
                  color: isDark ? "#0e0e0e" : "text.primary",
                  transition: "all 0.3s",
                  "&:hover": {
                    background: isDark
                      ? "rgba(255,255,255,0.1)"
                      : "linear-gradient(90deg, #3ae8cb 0%, #efd9d9 100%)",
                    transform: "translateY(-6px)",
                    boxShadow: theme.shadows[6],
                    color: isDark ? "#fff" : "#0e0e0e",
                    "& .MuiSvgIcon-root": {
                      color: isDark ? "#fff" : theme.palette.primary.main,
                    },
                  },
                }}
              >
                <Box
                  sx={{
                    mb: 2,
                    color: isDark ? theme.palette.primary.main : "#000",
                  }}
                >
                  {member.icon}
                </Box>
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  {member.title}
                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  <strong>Name:</strong> {member.name}
                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  <strong>Experience:</strong> {member.experience}
                </Typography>
                <Typography variant="body2">
                  <strong>Skills:</strong> {member.skills}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Team;
