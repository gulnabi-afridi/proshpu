import React from "react";
import { Box, Container, Grid } from "@mui/material";
import Heading from "../components/ResponsiveH1";
import Image from "next/image";
import styles from "./QuestionCard.module.css";
import { styled } from "@mui/material/styles";
import { Link } from "@mui/material";

const TinyText = styled("h5")({
  fontStyle: `normal`,
  fontWeight: `500`,
  fontSize: `16px`,
  lineHeight: "25px",
  "@media (max-width: 768px)": {
    fontSize: "14px",
  },
});

const CustomLink = styled(Link)({
  textDecoration: "none",
  color: "#05B020",
  fontWeight: "900",
  fontSize: "18px",
  "@media (max-width: 768px)": {
    fontSize: "16px",
  },
});

function QuestionCard() {
  const Cards = [
    {
      img: "/assetsProtection.svg",
      question: " How are my assets protected?",
      answer: [
        {
          ans: (
            <TinyText>
              Trusting us with your investments is not something we take for
              granted. Prospuh is a licensed broker dealer by the Securities
              Commission of the Bahamas (O’cof Securities Limited) and as such
              is bound by strict regulatory obligations in how we handle and
              protect your assets. We do this via a process known as
              safeguarding."
            </TinyText>
          ),
        },
        {
          ans: (
            <TinyText>
              Univested customer funds are stored separately from our business
              funds with regulated US Institutions. Invested assets are held
              with authorized custodians.
            </TinyText>
          ),
        },
        {
          ans: (
            <TinyText>
              Your US securities are held with our partner Alpaca, who is{" "}
              <CustomLink
                href="https://www.finra.org/about/firms-we-regulate/firms-we-regulate-a"
                target="_blank"
              >
                FINRA
              </CustomLink>
              {""} regulated and is a{" "}
              <CustomLink
                href="https://www.sipc.org/list-of-members/?query=alpaca"
                target="_blank"
              >
                registered
              </CustomLink>{" "}
              member of the Securities Investor Protection Corporation (SIPC).
              This means your US securities are protected up to the value of
              $500,000 should Alpaca fail. You can read more about this directly
              on the{" "}
              <CustomLink
                href="https://www.sipc.org/for-investors/investor-faqs#questions-about-brokerage-firms"
                target="_blank"
              >
                SIPC website
              </CustomLink>
              .
            </TinyText>
          ),
        },
      ],
    },
    {
      img: "/regulation.svg",
      question: "How is Prospuh regulated?",
      answer: [
        {
          ans: (
            <TinyText>
              In each region we operate, we have the appropriate regulatory
              licence and/or permission, and are governed by the relevant local
              regulatory authorities.
            </TinyText>
          ),
        },
        {
          ans: (
            <TinyText>
              Prospuh is one of the Trade Names of O’Cof Securities Limited
              which is an authorised and regulated SIA firm by the Securities
              Commission of the Bahamas in The Commonwealth of the Bahamas.
            </TinyText>
          ),
        },
        {
          ans: (
            <TinyText>
              You can find us listed as a licensee{" "}
              <CustomLink
                target="_blank"
                href="https://www.scb.gov.bs/wp-content/uploads/2023/04/SIA-Firms-as-at-31-March-2023-1.pdf"
              >
                {" "}
                Here
              </CustomLink>
            </TinyText>
          ),
        },
      ],
    },
    {
      img: "/support.svg",
      question: "How can I contact Support?",
      answer: <Link href="/help"></Link>,
    },
    {
      img: "/stock.svg",
      question: "Do I own my own stock?",
      answer: [
        {
          ans: (
            <TinyText>
              Any instruments you purchase through Prospuh are yours. You would
              be the “beneficial owner” of those instruments (shares or ETFs)
              and they are held in a clients' assets account on your behalf.
              <br /> You retain all the rights and benefits of being a
              shareholder, and Prospuh, where possible, also provides
              information about corporate events. Your stocks may allow you to
              vote in shareholder meetings if applicable.
            </TinyText>
          ),
        },
        {
          ans: (
            <TinyText>
              US shares are registered with the DTCC (Depository Trust and
              Clearing Corporation) which is the central securities depository
              of the United States.
            </TinyText>
          ),
        },
      ],
    },
  ];

  return (
    <Grid container spacing={2}>
      {Cards.map((item, index) => {
        return (
          <>
            {index === 2 ? (
              <Grid key={index} item xs={12} lg={6}>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Link
                    href="/help"
                    target="_blank"
                    sx={{
                      width: "100%",
                      maxWidth: "600px",
                      height: "403px",
                      border: "4px solid #05B020",
                      borderRadius: "10px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "16px",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "black",
                      textDecoration: "none",
                      fontWeight: `700`,
                      fontSize: { xs: "24px", md: `26px` },
                      fontFamily: "Roboto Slab",
                      textAlign: "center",
                    }}
                  >
                    <Box
                      sx={{
                        width: "240px",
                        height: "200px",
                        position: "relative",
                      }}
                    >
                      <Image
                        src={item.img}
                        layout="fill"
                        objectFit="contain"
                        alt=""
                      />
                    </Box>
                    {item.question}
                  </Link>
                </Box>
              </Grid>
            ) : (
              <Grid key={index} item xs={12} lg={6}>
                <Box
                  sx={{
                    width: "100%",
                    height: { xs: "600px", md: "403px" },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    className={styles["flip-card"]}
                    sx={{
                      width: "100%",
                      maxWidth: "600px",
                      height: "100%",
                      border: "4px solid #05B020",
                      borderRadius: "10px",
                      perspective:
                        "1000px" /* Remove this if you don't want the 3D effect */,
                    }}
                  >
                    <Box className={styles["flip-card-inner"]}>
                      {/* Front Side of the card */}
                      <Box className={styles["flip-card-front"]}>
                        <Box
                          sx={{
                            display: "flex",
                            height: "100%",
                            gap: "10px",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "1rem",
                          }}
                        >
                          <Box
                            sx={{
                              width: "240px",
                              height: "200px",
                              position: "relative",
                            }}
                          >
                            <Image
                              src={item.img}
                              layout="fill"
                              objectFit="contain"
                              alt=""
                            />
                          </Box>
                          <Heading
                            sx={{
                              fontFamily: "Roboto Slab",
                              fontSize: { xs: "24px", md: `26px` },
                              lineHeight: `154.4%`,
                              fontWeight: "700",
                              fontStyle: "normal",
                            }}
                          >
                            {item.question}
                          </Heading>
                        </Box>
                      </Box>

                      {/* Back Side of the Card */}
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: { xs: "5px", md: "10px" },
                          justifyContent: "center",
                          padding: "1rem",
                          alignItems: "center",
                        }}
                        className={styles["flip-card-back"]}
                      >
                        {item.answer?.map((item, index) => {
                          return <Box key={index}>{item.ans}</Box>;
                        })}
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            )}
          </>
        );
      })}
    </Grid>
  );
}

export default QuestionCard;
