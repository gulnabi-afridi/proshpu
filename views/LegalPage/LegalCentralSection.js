import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {styled} from "@mui/material/styles";
import Image from "next/image";
import Mobile1Img from "../../public/updated photos/IMG_0140.jpg";
import Button from "@mui/material/Button";
import Logo from "../../public/logo.png";
import AlpacaImg from "../../public/Alpaca.png";
import {Grid} from "@mui/material";


// Group 57

const Title = styled("h1")({
  fontStyle: `normal`,
  fontWeight: `500`,
  fontSize: `55px`,
  lineHeight: `129.4%`,
  letterSpacing: `0.05em`,
  color: `#303030`,
  fontFamily: `Roboto Slab`,
  "& > span": {
    fontWeight: "800",
  },
  "@media (max-width: 520px)": {
    fontSize: "36px", lineHeight: `48px`,
  },
});

const SubTitle = styled("h5")({
  fontStyle: `normal`,
  fontWeight: `600`,
  fontSize: `27px`,
  lineHeight: `144.4%`,
  letterSpacing: `0.05em`,
  color: `#303030`,
  fontFamily: `Roboto Slab`,
});

const ButtonCustom = styled(Button)({
  fontFamily: `Montserrat, sans-serif`,

  borderRadius: `15px`,
  fontStyle: `normal`,
  fontWeight: `bold`,
  fontSize: `35px`,
  lineHeight: `150.9%`,
  textAlign: `center`,
  letterSpacing: `0.02rem`,
  color: `#fbfaf5`,
  background: `#0AB02C`,
  padding: `14px 30px`,
  border: `2px solid #0db033`,
  cursor: `pointer`,
  textTransform: "none",
  "&:hover": {
    background: `#0AB02C`,
  }
});

const Paragraph = styled("a")({
  fontStyle: `normal`,
  fontWeight: `600`,
  fontSize: `19px`,
  lineHeight: `189.4%`,
  color: `#666666`,
  fontFamily: `Montserrat, sans-serif`,
});

function LegalCentralSection() {
  return (<Container
    maxWidth="lg"
    sx={{
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      py: {xs: "2rem", md: "0rem"},
    }}
  >
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: {xs: "column", md: "row"},
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* left portion */}
      <Box
        sx={{
          width: {xs: "100%", md: "50%"},
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "start",
          gap: "30px",
        }}
      >
        <Title>Legal Central</Title>
        <Paragraph>
          Welcome to our Legal Central page, where you'll find all the legal information related to our trading
          platform. Here, you can access our Terms of Use, Privacy Policy, Cookie Policy, and information about our
          compliance with various regulations and laws. We also have a section dedicated to our Intellectual Property
          Rights. If you have any questions or concerns, please contact us. We are committed to transparency and
          compliance with all applicable laws and regulations.
        </Paragraph>
      </Box>

      {/* right portion */}
      <Box
        sx={{
          width: {xs: "100%", md: "50%"}, display: "flex", justifyContent: "center", alignItems: "center",
        }}
      >
        <Image src={Mobile1Img} alt="mobile image"/>
      </Box>
    </Box>

    {/* propuh  */}
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        py: "3rem",
      }}
    >
      {/*prospuh portion  */}
      <ButtonCustom>
        <Image src={Logo} alt="logo img"/>
      </ButtonCustom>
      <Grid container spacing={1} sx={{my: "4rem"}}>
        <Grid
          container
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "center",
            gap: "10px",
            mb: {xs: "2rem", md: "opx"},
          }}
        >
          <SubTitle>Terms & Policies</SubTitle>
          <Paragraph
            href={'/prospuhPolicies/Terms and Conditions.pdf'}
            sx={{
              fontWeight: "400", fontSize: "20px", fontFamily: "Roboto Slab",
            }}
          >
            Terms & Policies
          </Paragraph>
          <Paragraph
            href={'/prospuhPolicies/Privacy Policy.pdf'}
            sx={{
              fontWeight: "400", fontSize: "20px", fontFamily: "Roboto Slab",
            }}
          >
            Privacy Policy
          </Paragraph>

        </Grid>
        <Grid
          container
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "center",
            gap: "10px",
            mb: {xs: "2rem", md: "opx"},
          }}
        >
          <SubTitle>Disclosures</SubTitle>
          <Paragraph
            href={'/prospuhPolicies/General Disclosures.pdf'}
            sx={{
              fontWeight: "400", fontSize: "20px", fontFamily: "Roboto Slab",
            }}
          >
            General Disclosure
          </Paragraph>
          <Paragraph
            href={'/prospuhPolicies/Fractional Shares Disclosure.pdf'}
            sx={{
              fontWeight: "400", fontSize: "20px", fontFamily: "Roboto Slab", textAlign: "center",
            }}
          >
            Fractional Shares Disclosure{" "}
          </Paragraph>
          <Paragraph
            href={'/prospuhPolicies/Market Volatility Disclosures.pdf'}
            sx={{
              fontWeight: "400", fontSize: "20px", fontFamily: "Roboto Slab",
            }}
          >
            Market Volatility Disclosure
          </Paragraph>
        </Grid>
        <Grid
          container
          item
          xs={12}
          md={4}
          sx={{
            display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "center", gap: "10px",
          }}
        >
          <SubTitle>Others</SubTitle>
          {/*<Paragraph*/}
          {/*  sx={{*/}
          {/*    fontWeight: "400", fontSize: "20px", fontFamily: "Roboto Slab",*/}
          {/*  }}*/}
          {/*>*/}
          {/*  Fees and charges*/}
          {/*</Paragraph>*/}
          <Paragraph
            href={'/prospuhPolicies/SIPC Coverage and Account Protection.pdf'}
            sx={{
              fontWeight: "400", fontSize: "20px", fontFamily: "Roboto Slab", textAlign: "center",
            }}
          >
            SIPC               coverage and account protection
          </Paragraph>
          {/*<Paragraph*/}
          {/*  sx={{*/}
          {/*    fontWeight: "400", fontSize: "20px", fontFamily: "Roboto Slab",*/}
          {/*  }}*/}
          {/*>*/}
          {/*  Whistlebowling policy*/}
          {/*</Paragraph>*/}
        </Grid>
      </Grid>
    </Box>

    {/* Alpaca portion */}
    <Box
      sx={{
        py: "3rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <ButtonCustom
        sx={{
          background: "#CDD6CE", '&:hover': {
            background: "#CDD6CE",
          }, border: "none"
        }}
      >
        <Image src={AlpacaImg} alt="logo img"/>
      </ButtonCustom>
      <Grid container spacing={1} sx={{my: "4rem"}}>
        <Grid
          container
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "center",
            gap: "10px",
            mb: {xs: "2rem", md: "opx"},
          }}
        >
          <SubTitle>Terms & Policies</SubTitle>
          <Paragraph
            href={'/alpacePolicies/Alpaca Customer Agreement.pdf'}
            sx={{
              fontWeight: "400", fontSize: "20px", fontFamily: "Roboto Slab",
            }}
            // href={'https://files.alpaca.markets/disclosures/library/AcctAppMarginAndCustAgmt.pdf'}
            // target={'_blank'}
          >
            Alpaca Customer Agreement
          </Paragraph>
          <Paragraph
            href={'/alpacePolicies/Alpaca Terms and Conditions.pdf'}
            sx={{
              fontWeight: "400", fontSize: "20px", fontFamily: "Roboto Slab",
            }}
            // href={'https://files.alpaca.markets/disclosures/library/TermsAndConditions.pdf'}
            // target={'_blank'}
          >
            Terms and Conditions
          </Paragraph>
          <Paragraph
            sx={{
              fontWeight: "400", fontSize: "20px", fontFamily: "Roboto Slab",
            }}
            // target={'_blank'}
            href={`/alpacePolicies/Alpaca Privacy Notice.pdf`}
          >
            Privacy Notice
          </Paragraph>
        </Grid>
        <Grid
          container
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "center",
            gap: "10px",
            mb: {xs: "2rem", md: "opx"},
          }}
        >
          <SubTitle>Disclosures</SubTitle>
          <Paragraph
            sx={{
              fontWeight: "400", fontSize: "20px", fontFamily: "Roboto Slab",
            }}
            href={`/alpacePolicies/Alpaca Margin Disclosure Statement.pdf`}
            // target={"_blank"}
            // href={"https://files.alpaca.markets/disclosures/library/MarginDiscStmt.pdf"}
          >
            Margin Disclosure Statement
          </Paragraph>
          <Paragraph
            sx={{
              fontWeight: "400", fontSize: "20px", fontFamily: "Roboto Slab", textAlign: "center",
            }}
            href={`/alpacePolicies/Alpaca Use and Risk Disclosures.pdf`}
            // target={"_blank"}
            // href={'https://files.alpaca.markets/disclosures/library/UseAndRisk.pdf'}
          >
            Use and Risk Disclosures{" "}
          </Paragraph>
          <Paragraph
            sx={{
              fontWeight: "400", fontSize: "20px", fontFamily: "Roboto Slab",
            }}
            href={`/alpacePolicies/Alpaca Business Continuity Plan Summary.pdf`}
            // target={"_blank"}
            // href={'https://files.alpaca.markets/disclosures/library/SecuritiesBCPSummary.pdf'}
          >
            Business Continuity Plan
          </Paragraph>
        </Grid>
        <Grid
          container
          item
          xs={12}
          md={4}
          sx={{
            display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "center", gap: "10px",
          }}
        >
          <SubTitle>Others</SubTitle>
          {/*<Paragraph*/}
          {/*  sx={{*/}
          {/*    fontWeight: "400", fontSize: "20px", fontFamily: "Roboto Slab",*/}
          {/*  }}*/}
          {/*>*/}
          {/*  Fees and charges*/}
          {/*</Paragraph>*/}
          {/*<Paragraph*/}
          {/*  sx={{*/}
          {/*    fontWeight: "400", fontSize: "20px", fontFamily: "Roboto Slab", textAlign: "center",*/}
          {/*  }}*/}
          {/*>*/}
          {/*  Sipc coverage and account protection*/}
          {/*</Paragraph>*/}
          {/*<Paragraph*/}
          {/*  sx={{*/}
          {/*    fontWeight: "400", fontSize: "20px", fontFamily: "Roboto Slab",*/}
          {/*  }}*/}
          {/*>*/}
          {/*  Whistlebowling policy*/}
          {/*</Paragraph>*/}
        </Grid>
      </Grid>
    </Box>

  </Container>);
}

export default LegalCentralSection;
