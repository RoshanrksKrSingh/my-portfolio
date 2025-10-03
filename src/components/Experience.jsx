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
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

const experiences = [
  {
    company: "SN Softwares Solution",
    role: "MERN Developer",
    period: "Oct 2024 – Present",
    description:
      "Working on full-stack web applications using MongoDB, Express.js, React, and Node.js. Building scalable APIs, dashboards, and modern UI features.",
  },
  {
    company: "Enser Communication Ltd.",
    role: "IT Support Technician & Desktop Support Technician",
    period: "Jun 2022 – Sep 2024",
    description:
      "Provided end-user support, troubleshooting hardware/software, configuring systems, and ensuring smooth IT operations.",
  },
  {
    company: "Indiabulls (Dhani Loans and Services)",
    role: "IT Support Technician & Desktop Support Technician",
    period: "Nov 2021 – Jun 2022",
    description:
      "Handled desktop troubleshooting, hardware replacements, and technical assistance for employees to maintain productivity.",
  },
  {
    company: "Teleperformance",
    role: "IT Support Technician & Desktop Support Technician",
    period: "Apr 2021 – Nov 2021",
    description:
      "Delivered IT support, installed/configured systems, and provided quick resolutions to technical issues across teams.",
  },
];

const Experience = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Box
      id="experience"
      sx={{
        background: isDark
          ? "#000"
          : "linear-gradient(90deg, #3ae8cb 0%, #efd9d9 100%)",
        py: { xs: 1, md: 10 },
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
          Experience
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {experiences.map((exp, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={4}
              key={index}
              data-aos="fade-left"
              data-aos-delay={index * 500}
              sx={{ display: "flex" }}
            >
              <Card
                elevation={1}
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  textAlign: "center",
                  p: 3,
                  borderRadius: 3,
                  maxWidth: { xs: "270px", sm: "300px" },
                  transition: "all 0.3s",
                  minHeight: "250px",
                  color: isDark ? "#0e0e0e" : "text.primary",
                  backgroundColor: isDark ? "#fff" : "transparent",
                  "&:hover": {
                    background: isDark
                      ? "rgba(255,255,255,0.1)"
                      : "linear-gradient(90deg, #3ae8cb 0%, #efd9d9 100%)",
                    color: isDark ? "#fff" : "#0e0e0e",
                    boxShadow: theme.shadows[6],
                    transform: "translateY(-4px)",
                    "& .MuiTypography-root": {
                      color: isDark ? "#fff" : "#0e0e0e",
                    },
                    "& .MuiSvgIcon-root": {
                      color: isDark ? "#fff" : theme.palette.primary.main,
                    },
                  },
                }}
              >
                <Box
                  sx={{
                    color: isDark ? theme.palette.primary.main : "#000",
                    mb: 2,
                    fontSize: "2rem",
                  }}
                >
                  <WorkspacePremiumIcon fontSize="large" />
                </Box>

                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    {exp.company}
                  </Typography>
                  <Typography
                    variant="body2"
                    color={isDark ? "#0e0e0e" : "text.secondary"}
                  >
                    <strong>Role:</strong> {exp.role}
                  </Typography>
                  <Typography
                    variant="body2"
                    color={isDark ? "#0e0e0e" : "text.secondary"}
                  >
                    <strong>Period:</strong> {exp.period}
                  </Typography>
                  <Typography
                    variant="body2"
                    color={isDark ? "#0e0e0e" : "text.secondary"}
                  >
                    <strong>Description:</strong> {exp.description}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Experience;
