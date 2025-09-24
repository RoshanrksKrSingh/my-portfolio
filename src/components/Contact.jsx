import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Stack,
  useTheme,
  CircularProgress,
  Alert,
} from "@mui/material";

const Contact = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setSuccessMessage("");
  setErrorMessage("");

  try {
    const response = await axios.post(
      "https://my-contact-api.onrender.com/api/contact", // ← updated here
      formData,
      {
        withCredentials: true, // keep if the backend needs cookies
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    setSuccessMessage("✅ Thank you for your message!");
    setFormData({ name: "", email: "", message: "" });
  } catch (error) {
    console.error("Error submitting form:", error);
    setErrorMessage(
      error.response?.data?.error ||
        "❌ Oops! There was a problem sending your message."
    );
  } finally {
    setLoading(false);
  }
};


  return (
    <Box
      id="contact"
      sx={{
        py: 10,
        background: isDark
          ? "#000"
          : "linear-gradient(90deg, #3ae8cb 0%, #efd9d9 100%)",
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
            backgroundColor: isDark ? "#fff" : "rgba(255,255,255,0.15)",
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
                    style: { color: "#000" },
                  }}
                  InputLabelProps={{
                    style: { color: "#555" },
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: isDark ? "#888" : undefined,
                      },
                      "&:hover fieldset": {
                        borderColor: isDark ? "#00ccaa" : undefined,
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: isDark ? "#00ffd5" : undefined,
                      },
                    },
                  }}
                />
              ))}

              <Button
                type="submit"
                variant="contained"
                disabled={loading}
                sx={{
                  backgroundColor: "#00ffd5",
                  color: "#000",
                  fontWeight: "bold",
                  "&:hover": { backgroundColor: "#00ccaa" },
                  height: 48,
                }}
              >
                {loading ? (
                  <CircularProgress size={24} sx={{ color: "#000" }} />
                ) : (
                  "Send Message"
                )}
              </Button>

              {/* Message feedback */}
              {successMessage && <Alert severity="success">{successMessage}</Alert>}
              {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
            </Stack>
          </form>
        </Paper>
      </Container>
    </Box>
  );
};

export default Contact;
