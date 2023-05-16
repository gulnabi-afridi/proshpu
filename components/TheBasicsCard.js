import React from "react";
import { Box, Container } from "@mui/material";
import Heading from "../components/ResponsiveH1";
import Image from "next/image";
import styles from "./TheBasicsCard.module.css";

const TheBasicsSection = () => {
  const cards = [
    {
      card: "/card1,4 img.svg",
      question: "What is Investing?",
      answer:
        "Buying assets with the expectation that they will generate some future income or profit",
      w: "198px",
      h: "198px",
    },
    {
      card: "/card2 img.svg",
      question: "What are Stocks?",
      answer: "A unit of ownership in a company",
      w: "188px",
      h: "188px",
    },
    {
      card: "/card3 img.svg",
      question: "What is Risk?",
      answer:
        "The possibility that you can experience a loss in funds due to the uncertainty associated with an investment decision.",
      w: 200.7,
      h: 198.87,
    },
    {
      card: "/card1,4 img.svg",
      question: "What can I Invest in?",
      answer: (
        <>
          • Stocks <br />
          • Real Estate <br />
          • Cryptocurrencies <br />
          • Commodities <br />
          • Collectors’ Items <br />
          • Bonds <br />• Cash and Cash Equivalents
        </>
      ),
      w: "198px",
      h: "198px",
    },
    {
      card: "/card5 img.svg",
      question: "What is Volatility?",
      answer:
        "In terms of the market, volatility is basically a measurement of how much stock prices fluctuate on a daily basis.",
      w: "198px",
      h: "198px",
    },
    {
      card: "/card6 img.svg",
      question: "What is Leverage?",
      answer:
        "Also known as margin trading, involves borrowing capital to invest in more stock than what you can afford on your own.",
      w: "186px",
      h: "186px",
    },
    {
      card: "/card7 img.svg",
      question: "What is Market?",
      answer:
        "The stock market is where buyers and sellers come together to trade shares in eligible companies",
      w: "194px",
      h: "194px",
    },
    {
      card: "/card8 img.svg",
      question: "What you should or should not do before investing",
      answer: (
        <Box>
          <Box sx={{ fontWeight: "bold" }}>You should:</Box> <br />
          • set your goals <br />
          • create an emergency fund <br />• pay off any high-risk debt
        </Box>
      ),
      w: "136px",
      h: "136px",
    },
  ];

  return (
    // primary container
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gridGap: "2rem",
        justifyContent: "center",
        alignItems: "center",

        paddingTop: "4rem",
        paddingBottom: "10rem",
      }}
    >
      {cards.map(({ card, question, answer, w, h }, index) => {
        return (
          <Box
            className={styles["flip-card"]}
            key={index}
            sx={{
              width: "254px",
              height: "303px",
              border: "4px solid #05B020",
              borderRadius: "10px",
              marginTop: "3rem",
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
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "1rem",
                  }}
                >
                  <Box
                    sx={
                      {
                        // flexGrow: "1",
                      }
                    }
                  >
                    <Image width={w} height={h} src={card} alt={question} />
                  </Box>
                  <Heading
                    sx={{
                      // flexGrow: "1",
                      fontFamily: "Roboto Slab",
                      fontSize: "22px",
                      lineHeight: `154.4%`,
                      fontWeight: "700",
                      fontStyle: "normal",
                    }}
                  >
                    {question}
                  </Heading>
                </Box>
              </Box>

              {/* Back Side of the Card */}
              <Box
                sx={{
                  padding: "1rem",
                  display: "grid",
                  placeItems: "center",
                  fontWeight: "bold",
                }}
                className={styles["flip-card-back"]}
              >
                {answer}
              </Box>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default TheBasicsSection;
