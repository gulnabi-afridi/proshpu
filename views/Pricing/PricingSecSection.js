import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";

const Title = styled("h1")({
  fontStyle: `normal`,
  fontFamily: "Roboto Slab",
  fontWeight: `700`,
  fontSize: "55px",
  lineHeight: `130.4%`,
  letterSpacing: `0.05em`,
  color: `#fff`,
  maxWidth: '600px',
  "& > span": {
    color: `#05B020`,
  },
  "@media (max-width: 1000px)": {
    fontSize: "40px",
    lineHeight: `48px`,
  },
});

const Paragraph = styled("p")({
  fontStyle: `normal`,
  fontWeight: `600`,
  fontSize: `19px`,
  lineHeight: `151.4%`,
  color: `#666666`,
  fontFamily: "Montserrat",
  width: "80%",
  "& > span": {
    color: `#05B020`,
  },
  "@media (max-width: 1000px)": {
    fontSize: "16px",
    lineHeight: `35px`,
    width: "100%",
    color: '#fff',
    "& > span": {
      color: '#fff',
    },
  },
});

function PricingSecSection() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "start",
        paddingTop: '5rem',
        '@media only screen and (max-width: 1000px)': {
         py: '5rem',
        }
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* ------left div------ */}
        <Box
          sx={{
            width: { xs: "100%", md: "45%" },
            display: "flex",
            justifyContent: "start",
            alignItems: "start",
            mb:{xs:"1.5rem",md:"0rem"}
          }}
        >
          <Title>
            “Everyone deserves to own what they believe in, affordably”
          </Title>
        </Box>
        {/* ---------right div----------- */}
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Paragraph sx={{mb:{xs:"1rem",md:"3rem"}}}>
            We believe that everyone should be able to invest and that
            you shouldn’t have to pay for the privilege no matter who
            you are, or where you came from.
          </Paragraph>
          <Paragraph>
            {" "}
            Whether you’re investing from <span>as little as $1,</span> or all the way
            up to <span>$1,000 and beyond</span> means all the same to us. We
            make sure all fees, transactions, and investments are <span>fair</span>{" "}
            and <span>transparent.</span>
          </Paragraph>
        </Box>
      </Box>
    </Container>
  );
}

export default PricingSecSection;
