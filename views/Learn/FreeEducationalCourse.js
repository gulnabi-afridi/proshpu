import React from "react";
import { Box, Container } from "@mui/material";
import Heading from "../../components/ResponsiveH1";
import Video from "../Home/Video";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { fontSize } from "@mui/system";

const ButtonCustom = styled(Button)({
  fontFamily: `Montserrat, sans-serif`,
  background: `linear-gradient(90.05deg, #0db033 -30.69%, #28b078 118.83%)`,
  borderRadius: `7px`,
  fontStyle: `normal`,
  fontWeight: `bold`,
  fontSize: `35px`,
  lineHeight: `150.9%`,
  textAlign: `center`,
  letterSpacing: `0.02rem`,
  color: `#fbfaf5`,
  padding: `14px 40px`,
  border: `2px solid #0db033`,
  cursor: `pointer`,
  textTransform: "none",
});

function FreeEducationalCourse() {
  return (
    <Box>
      <Heading
        sx={{
          textAlign: "center",
          fontFamily: "Roboto Slab",
          fontSize: { xs: "30px", md: "60px" },
          lineHeight: `150.9%`,
          fontWeight: "bold",
        }}
      >
        Free Equcational Course
      </Heading>
      <Video />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "Center",
          alignItems: "center",
          mb: "16rem",
          px: "16px",
        }}
      >
        <ButtonCustom>Access your free course</ButtonCustom>
      </Box>
    </Box>
  );
}

export default FreeEducationalCourse;
