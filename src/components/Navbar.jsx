import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";


const leftSections = ["About", "Experience", "Team"];
const rightSections = ["Skills", "Projects", "Education", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isDark = theme.palette.mode === "dark";

  const toggleDrawer = (state) => () => setOpen(state);

  const handleLinkClick = (section) => (e) => {
    e.preventDefault();
    const target = document.querySelector(`#${section.toLowerCase()}`);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          top: 0,
          left: 0,
          width: "100vw",
          overflowX: "hidden",
          boxSizing: "border-box",
          background: isDark
            ? "#000000"
            : "linear-gradient(90deg, #3ae8cb 0%, #efd9d9 100%)",
        }}
      >
        <Toolbar disableGutters sx={{ px: 2 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              maxWidth: 1200,
              mx: "auto",
              gap: 2,
              minWidth: 0,
            }}
          >
            {/* Left side: Logo + About + Experience + Team */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Typography
                variant="h5"
                component="a"
                href="#hero"
                noWrap
                sx={{
                  fontWeight: 800,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: { xs: "1rem", sm: "1.25rem", md: "1.25rem" },
                  background: isDark
                    ? "linear-gradient(90deg, #00ffd5, #00ccaa)"
                    : "linear-gradient(90deg, #01594a, #070101)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textDecoration: "none",
                }}
              >
                MyPortfolio
              </Typography>

              {!isMobile && (
                <Box sx={{ display: "flex", gap: 1.5 }}>
                  {leftSections.map((section) => (
                    <Button
                      key={section}
                      href={`#${section.toLowerCase()}`}
                      sx={{
                        px: 1,
                        whiteSpace: "nowrap",
                        color: isDark ? "#fff" : "#000",
                        fontWeight: 500,
                      }}
                    >
                      {section}
                    </Button>
                  ))}
                </Box>
              )}
            </Box>

            {/* Center: Dark/Light Toggle Placeholder */}
            {!isMobile && (
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="body2"
                  sx={{ color: isDark ? "#fff" : "#000", ml: 2, }}
                >
                  🌙 / ☀️
                </Typography>
              </Box>
            )}

            {/* Right side: Skills + Projects + Education + Contact */}
            {!isMobile && (
              <Box sx={{ display: "flex", gap: 1.5 }}>
                {rightSections.map((section) => (
                  <Button
                    key={section}
                    href={`#${section.toLowerCase()}`}
                    sx={{
                      px: 1,
                      whiteSpace: "nowrap",
                      color: isDark ? "#fff" : "#000",
                      fontWeight: 500,
                    }}
                  >
                    {section}
                  </Button>
                ))}
              </Box>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <IconButton
                edge="end"
                onClick={toggleDrawer(true)}
                sx={{ color: isDark ? "#fff" : "#000" }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 250,
            bgcolor: isDark ? "#000" : "#fff",
            color: isDark ? "#fff" : "#000",
            mt: 0,
          }}
          role="presentation"
        >
          {/* Close Icon */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              p: 2,
            }}
          >
            <IconButton
              onClick={toggleDrawer(false)}
              sx={{ color: isDark ? "#fff" : "#000" }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Drawer Links: Left + Right Sections Combined */}
          <List>
            {[...leftSections, ...rightSections].map((section) => (
              <ListItem key={section} disablePadding>
                <ListItemButton
                  component="a"
                  href={`#${section.toLowerCase()}`}
                  onClick={handleLinkClick(section)}
                  sx={{ color: isDark ? "#fff" : "#000" }}
                >
                  <ListItemText primary={section} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
