import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// icons
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiMui, SiTailwindcss } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";

// Arrow components
const arrowCommon = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "rgba(0,255,213,0.85)",
  borderRadius: "50%",
  width: "45px",
  height: "45px",
  top: "40%",
  position: "absolute",
  cursor: "pointer",
  zIndex: 5,
};
const NextArrow = ({ onClick }) => (
  <div style={{ ...arrowCommon, right: -22 }} onClick={onClick}>
    <FaChevronRight size={18} color="#000" />
  </div>
);
const PrevArrow = ({ onClick }) => (
  <div style={{ ...arrowCommon, left: -22 }} onClick={onClick}>
    <FaChevronLeft size={18} color="#000" />
  </div>
);

const skills = [
  { title: "HTML", description: "Strong foundation in building semantic, accessible website structures.", icon: <FaHtml5 size={60} color="#cc3300" /> },
  { title: "CSS", description: "Proficient in styling and layouts using Flexbox, Grid, and animations.", icon: <FaCss3Alt size={60} color="#0d47a1" /> },
  { title: "JavaScript", description: "Experienced in adding interactivity, ES6+, DOM manipulation, and async programming.", icon: <FaJs size={60} color="#c9a900" /> },
  { title: "Responsive Design", description: "Building mobile-first websites with adaptive layouts for all screen sizes.", icon: <MdPhoneIphone size={60} color="#0088aa" /> },
  { title: "React", description: "Skilled in building modern SPAs with hooks, context API, and component-based architecture.", icon: <FaReact size={60} color="#007b9e" /> },
  { title: "Node.js", description: "Experience building backend services and REST APIs using Node.js runtime.", icon: <FaNodeJs size={60} color="#1a4d1a" /> },
  { title: "Express.js", description: "Hands-on with Express.js for routing, middleware, and scalable server-side apps.", icon: <SiExpress size={60} color="#222" /> },
  { title: "MongoDB", description: "Good understanding of NoSQL database design, CRUD operations, and Mongoose.", icon: <SiMongodb size={60} color="#255d25" /> },
  { title: "MUI", description: "Building responsive UI using Material UI components and theming.", icon: <SiMui size={60} color="#004c99" /> },
  { title: "Tailwind CSS", description: "Utility-first approach for fast UI development.", icon: <SiTailwindcss size={60} color="#0ea5e9" /> },
];

const Skills = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  // Media queries for breakpoints
  const isXs = useMediaQuery("(max-width:600px)");
  const isSm = useMediaQuery("(max-width:900px)");

  // Decide slides count
  let slidesToShow = 3;
  if (isXs) slidesToShow = 1;
  else if (isSm) slidesToShow = 2;

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    adaptiveHeight: true,
  };

  return (
    <Box
      id="skills"
      sx={{
        py: 14,
        background: isDark
          ? "#000000" // dark mode black
          : "linear-gradient(90deg, #3ae8cb 0%, #efd9d9 100%)", // light mode gradient
        color: isDark ? "#fff" : "#0e0e0e",
        textAlign: "center",
        overflow: "visible",
      }}
    >
      <Container>
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
              Skills
            </Typography>

        <Slider {...sliderSettings}>
          {skills.map((skill, idx) => (
            <div key={idx} style={{ padding: "0 8px", boxSizing: "border-box", width: "100%" }}>
              <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
                <Card
                  sx={{
                    minHeight: 250,
                    width: { xs: "95%", sm: "90%", md: "85%" },
                    maxWidth: 400,
                    mb: 2,
                    mx: "auto",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    color: isDark ? "#0e0e0e" : "text.primary",
                  backgroundColor: isDark ? "#fff" : "transparent",
                    backdropFilter: "blur(4px)",
                    borderRadius: 3,
                    transition: "transform 0.25s, background-color 0.25s",
                    
                  }}
                >
                  <CardContent sx={{ flexGrow: 1, textAlign: "center" }}>
                    <Box mb={2}>{skill.icon}</Box>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {skill.title}
                    </Typography>
                    <Typography variant="body2" mt={1} sx={{ wordBreak: "break-word" }}>
                      {skill.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </div>
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default Skills;
