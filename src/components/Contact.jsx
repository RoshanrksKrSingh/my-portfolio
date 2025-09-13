import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Stack,
  useTheme,
} from "@mui/material";

const Contact = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Box
      id="contact"
      sx={{
        py: 10,
        background: isDark
          ? "#000" // black in dark mode
          : "linear-gradient(90deg, #3ae8cb 0%, #efd9d9 100%)", // unchanged in light mode
        textAlign: "center",
      }}
    >
      <Container maxWidth="sm">
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
          Contact Me
        </Typography>

        <Paper
          elevation={6}
          sx={{
            p: 4,
            backgroundColor: isDark
              ? "#fff" // white form in dark mode
              : "rgba(255,255,255,0.15)", // original in light mode
            backdropFilter: isDark ? "none" : "blur(5px)",
            borderRadius: 3,
          }}
        >
          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              {["name", "email", "message"].map((field) => (
                <TextField
                  key={field}
                  label={
                    field === "name"
                      ? "Your Name"
                      : field === "email"
                      ? "Your Email"
                      : "Your Message"
                  }
                  variant="outlined"
                  fullWidth
                  name={field}
                  type={field === "email" ? "email" : "text"}
                  multiline={field === "message"}
                  rows={field === "message" ? 5 : undefined}
                  value={formData[field]}
                  onChange={handleChange}
                  required
                  InputProps={{
                    style: { color: "#000" }, // black text inside white form
                  }}
                  InputLabelProps={{
                    style: { color: "#555" }, // gray label
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: isDark ? "#888" : undefined, // darker border in dark mode
                      },
                      "&:hover fieldset": {
                        borderColor: isDark ? "#00ccaa" : undefined, // highlight on hover
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: isDark ? "#00ffd5" : undefined, // neon border on focus
                      },
                    },
                  }}
                />
              ))}

              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: "#00ffd5",
                  color: "#000",
                  fontWeight: "bold",
                  "&:hover": { backgroundColor: "#00ccaa" },
                }}
              >
                Send Message
              </Button>
            </Stack>
          </form>
        </Paper>
      </Container>
    </Box>
  );
};

export default Contact;