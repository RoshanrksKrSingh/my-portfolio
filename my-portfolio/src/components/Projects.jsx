import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Link,
  CardActions,
  useTheme,
} from "@mui/material";

const projects = [
  {
    title: "Personal Portfolio Website",
    description:
      "A personal portfolio showcasing my skills, projects, and experience.",
    link: "https://glowing-treacle-548e0c.netlify.app/",
  },
  {
    title: "Uhurucare",
    description:
      "A fully responsive healthcare website built with modern web technologies. It includes a homepage, about section, services overview, and a functional contact form. Designed with user experience in mind, the site ensures easy navigation and clean UI for both patients and healthcare providers.",
    link: "https://www.uhurucare.com/",
  },
  {
    title: "Uhurucare Backend (API)",
    description:
      "Developed the complete backend architecture and RESTful APIs for Uhurucare, including contact form handling, user data management, and secure communication endpoints.",
    link: "#",
  },
  {
    title: "BBCorp (bbcorp.trade)",
    description:
      "A fully functional, multi-page trading platform website developed collaboratively by our small team. It features homepage, account setup, trading interface, and built-in support—all wrapped in a clean, user-friendly design.",
    link: "https://bbcorp.trade/en",
  },
  {
    title: "BBCorp Admin Portal",
    description:
      "A secure admin dashboard with complete UI and integrated APIs for managing platform users, transactions, and system settings. Designed for efficiency and control with real-time insights.",
    link: "https://bbcorp.trade/admin",
  },
  {
    title: "BBCorp WhatsApp User Portal",
    description:
      "A user-facing portal designed for seamless onboarding via WhatsApp, integrating automation for user queries, registration, and service access through a clean and intuitive interface.",
    link: "https://bbcorp.trade/whatsapp",
  },
  {
    title: "BBCorp Backend (All Portals API)",
    description:
      "Engineered the backend system and APIs for BBCorp's full platform—including the main website, admin portal, and WhatsApp user portal. Features include authentication, data flow handling, and secure API endpoints.",
    link: "#",
  },
];

const Projects = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      id="projects"
      sx={{
        py: 10,
        background: isDark
          ? "#000000" // dark mode black
          : "linear-gradient(90deg, #3ae8cb 0%, #efd9d9 100%)", // light mode gradient
        color: isDark ? "#fff" : "#0e0e0e",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <Container>
        {/* Heading */}
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
                  Projects
                </Typography>

        {/* Marquee Wrapper */}
        <Box
          sx={{
            display: "flex",
            gap: 3,
            width: "max-content",
            animation: "scrollLeft 30s linear infinite",
            "@keyframes scrollLeft": {
              "0%": { transform: "translateX(0)" },
              "100%": { transform: "translateX(-50%)" },
            },
          }}
        >
          {[...projects, ...projects].map((project, index) => (
            <Card
              key={index}
              sx={{
                minWidth: 280,
                maxWidth: 300,
                flexShrink: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                p: 2,
              color: isDark ? "#0e0e0e" : "text.primary",
                  backgroundColor: isDark ? "#fff" : "transparent",
                backdropFilter: "blur(4px)",
                borderRadius: 3,
                textAlign: "center",
                transition: "transform 0.3s, background-color 0.3s",
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
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, mb: 1, wordBreak: "break-word" }}
                >
                  {project.title}
                </Typography>
                <Typography variant="body2" sx={{ wordBreak: "break-word" }}>
                  {project.description}
                </Typography>
              </CardContent>

              {/* Button */}
              {project.link && project.link !== "#" && (
                <CardActions sx={{ justifyContent: "center", mt: "auto" }}>
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      display: "inline-block",
                      backgroundColor: isDark ? "#3ae8cb" : "#3ae8cb",
                      color: isDark ? "#000" : "#0e0e0e",
                      px: 2,
                      py: 1,
                      borderRadius: "8px",
                      fontWeight: "bold",
                      textDecoration: "none",
                      transition: "background 0.3s",
                      "&:hover": {
                        backgroundColor: isDark ? "#00ccaa" : "#00ccaa",
                      },
                    }}
                  >
                    View Project
                  </Link>
                </CardActions>
              )}
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;