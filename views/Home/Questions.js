import React from "react";
import { Box, Container, Grid } from "@mui/material";
import QuestionCard from "../../components/QuestionCard";

function Questions() {
  return (
    <Box
      sx={{
        padding: "20px 4px",
        position: "relative",
        overflow: "hidden",
        mb: 8,
      }}
    >
      <Container maxWidth="lg">
        <QuestionCard />
      </Container>
    </Box>
  );
}

export default Questions;
