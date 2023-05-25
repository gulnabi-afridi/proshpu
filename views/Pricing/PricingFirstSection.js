import React from "react";
import {Box} from "@mui/material";
import {styled} from "@mui/material/styles";
import Image from "next/image";
import PricingImg1 from "../../public/SplashScreen 1.png";
import InIcon from "../../public/inIcon.png";
import Container from "@mui/material/Container";

const Title = styled("h1")({
  fontStyle: `normal`,
  fontFamily: "Roboto Slab",
  fontWeight: `700`,
  fontSize: "60px",
  lineHeight: `130.4%`,
  letterSpacing: `0.05em`,
  color: `#303030`,
  "& > span": {
    color: `#05B020`,
  },
  "@media (max-width: 900px)": {
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
  marginTop: "3rem",
  width: "80%",
  "& > span": {
    color: `#05B020`,
  },
  "@media (max-width: 900px)": {
    fontSize: "16px",
    lineHeight: `35px`,
    width: "100%",
  },
});

function PricingFirstSection() {
  return (
    <Box
      sx={{
        overflowX: "hidden",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          width: "100vw",
          minHeight: "100vh",
          display: "flex",
          flexDirection: {xs: "column", md: "row"},
          justifyContent: "center",
          alignItems: "center",
          py: {xs: "4rem", md: "2rem"},
        }}
      >
        {/* left part */}
        <Box
          sx={{
            width: {xs: "100%", md: "100%"},
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Title>
            Investing in some places in the <span>Caribbean</span> could cost you <span>$1000+</span> to buy 10 stocks. With Prospuh it would only
            be less than <span>$50</span>.
          </Title>

          <Box sx={{width: "100%"}}>
            <Paragraph>
              In some Caribbean countries investing is a hassle, costing
              you a significant <span>$1000 or more</span> to invest in 10 stocks.
              However, with Prospuh, that gets reduced by a large
              margin, costing you <span>only $30.</span> Don’t want to invest in 10
              stocks? Worry not, as Prospuh lets you reap those same
              benefits no matter the number of stocks you invest in.
              Experience easy access to the markets for an affordable
              price with our modern, easy-to-use, and cutting-edge
              platform. We don’t only make investing simple for you, but
              we make sure you look good doing it too.
            </Paragraph>
          </Box>
        </Box>

        {/* right part */}
        <Box
          sx={{
            width: {xs: "100%%", md: "25%"},
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: {xs: "none", md: "relative"},
            bottom: "60px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              position: {xs: "none", md: "absolute"},
              transform: {xs: "", md: "rotate(-18.88deg)"},
              left: "13rem",
              mt: {xs: "3rem", md: "0px"},
            }}
          >
            <Image src={PricingImg1} alt="pricingImg" objectFit="contain"/>
          </Box>
          <Box
            width="30px"
            sx={{
              position: "relative",
              top: "16rem",
              left: "8rem",
              right: "",
              display: {xs: "none", md: "flex"},
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image src={InIcon} alt="circle" objectFit="fill"/>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default PricingFirstSection;
