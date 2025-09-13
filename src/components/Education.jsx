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
import SchoolIcon from "@mui/icons-material/School";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const educationData = [
  {
    icon: <WorkspacePremiumIcon fontSize="large" />,
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science & Engineering",
    institution: "Dr. A. P. J. Abdul Kalam Technical University, Lucknow",
    duration: "2017 - 2020",
  },
  {
    icon: <SchoolIcon fontSize="large" />,
    degree: "Bachelor of Science (B.Sc)",
    field: "Physics & Chemistary",
    institution: "GPSPG Khalilabad, Santkabir Nagar",
    duration: "2013 - 2016",
  },
  {
    icon: <EmojiEventsIcon fontSize="large" />,
    degree: "Intermediate",
    institution: "HIC, Padrauna, Kushinagar",
    duration: "2013",
  },
  {
    icon: <EmojiEventsIcon fontSize="large" />,
    degree: "High School",
    institution: "Bihar School Examination Board",
    duration: "2010",
  },
];

const Education = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Box
      id="education"
      sx={{
        background: isDark
          ? "#000" // dark mode black
          : "linear-gradient(90deg, #3ae8cb 0%, #efd9d9 100%)", // light mode gradient
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
      ? "linear-gradient(90deg, #00ffd5, #00ccaa)" // ✅ dark mode gradient
      : "linear-gradient(90deg, #01594a, #070101)", // ✅ light mode gradient
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  }}
>
  Education
</Typography>


        <Grid container spacing={4} justifyContent="center">
          {educationData.map((item, index) => (
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
                    "& .MuiSvgIcon-root": { color: isDark ? "#fff" : theme.palette.primary.main },
                    "& .MuiTypography-root": { color: isDark ? "#fff" : "#0e0e0e" },
                  },
                }}
              >
              <Box sx={{ color: isDark ? theme.palette.primary.main : "#000", mb: 2 }}>
  {item.icon}
</Box>


                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    {item.degree}
                  </Typography>
                  {item.field && (
                    <Typography variant="body2" color={isDark ? "#0e0e0e" : "text.secondary"}>
                      <strong>Field:</strong> {item.field}
                    </Typography>
                  )}
                  <Typography variant="body2" color={isDark ? "#0e0e0e" : "text.secondary"}>
                    <strong>Institution:</strong> {item.institution}
                  </Typography>
                  <Typography variant="body2" color={isDark ? "#0e0e0e" : "text.secondary"}>
                    <strong>Duration:</strong> {item.duration}
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

export default Education;