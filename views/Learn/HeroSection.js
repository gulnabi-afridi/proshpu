import React from "react";
import Container from "@mui/material/Container";
import Image from "next/image";
import Box from "@mui/material/Box";
import Heading from "../../components/ResponsiveH1";
import RadioBtnDescription from "../../components/RadioBtnDescription";

const HeroSection = () => {
    return (
        // Primary Container

        <Box
            sx={{
                position: "relative",
            }}
        >
            {/*	Design Elements   */}

            {/* Cloud Left image container */}
            <Box
                sx={{
                    left: "-9rem",
                    top: "-6rem",
                    position: "absolute",
                    zIndex: -1,
                }}
            >
                <Image
                    priority
                    width={"565px"}
                    height={"544px"}
                    src={"/leftCloud.png"}
                    alt={"Left Cloud"}
                />
            </Box>

            {/* Large circle image container */}
            <Box
                sx={{
                    left: "51rem",
                    top: "1rem",
                    position: "absolute",
                    zIndex: -1,
                }}
            >
                <Image
                    width={"74px"}
                    height={"74px"}
                    src={"/largeCircle.png"}
                    alt={"large Circle"}
                />
            </Box>

            {/* medium circle image container */}
            <Box
                sx={{
                    left: "57rem",
                    top: "5rem",
                    position: "absolute",
                    zIndex: -1,
                }}
            >
                <Image
                    width={"24px"}
                    height={"24px"}
                    src={"/largeCircle.png"}
                    alt={"Medium Circle"}
                />
            </Box>

            {/* Secondary Container */}
            <Container
                sx={{
                    paddingTop: "8rem",
                }}
            >
                {/* flex box */}

                <Box
                    sx={{
                        marginTop: "2rem",
                        paddingBottom: "8rem",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gridGap: "4rem",
                        "@media (max-width: 1050px)": {
                            flexDirection: "column",
                        },
                    }}
                >
                    {/* left side container */}
                    <Box
                        sx={{
                            paddingBottom: "4rem",
                            paddingLeft: "2rem",
                            order: "1",
                            position: "relative",
                            "@media (max-width: 1050px)": {
                                order: "2",
                            },
                        }}
                    >
                        <Heading
                            sx={{
                                fontFamily: "Roboto Slab",
                                fontSize: { xs: "30px", s: "40px", md: "60px" },
                                lineHeight: `150.9%`,
                                fontWeight: "bold",
                                "@media (max-width: 900px)": {
                                    textAlign: "center",
                                },
                            }}
                        >
                            The First Step &nbsp;
                            <Box
                                component={"span"}
                                sx={{
                                    display: "inline-flex",
                                    color: "white",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: "#05B020",
                                    width: { xs: "41px", md: "82px" },
                                    height: { xs: "41px", md: "82px" },
                                    borderRadius: "50%",
                                    padding: { xs: "1.5rem", md: "3rem" },
                                }}
                            >
                                in
                            </Box>{" "}
                            <br />
                            your financial
                            <br /> Journey
                        </Heading>

                        <Heading
                            sx={{
                                marginTop: "3rem",
                                fontFamily: "Roboto Slab",
                                fontSize: "38px",
                                lineHeight: "150.9%",
                                color: "#05B020",
                                fontWeight: "400",
                            }}
                        >
                            What you must know about
                        </Heading>

                        {/* Radio buttons and Description Container */}
                        <Box
                            sx={{
                                position: "absolute",
                                right: "0",
                                paddingRight: "2rem",
                                marginTop: "1rem",
                                marginBottom: "2rem",
                            }}
                        >
                            <RadioBtnDescription
                                sx={{
                                    fontFamily: "Montserrat",
                                    fontStyle: "normal",
                                    fontWeight: "600",
                                    fontSize: "26px",
                                    lineHeight: "163.4%",
                                    letterSpacing: "-0.02em",
                                }}
                            >
                                World of investing right from
                            </RadioBtnDescription>
                            <RadioBtnDescription
                                sx={{
                                    fontFamily: "Montserrat",
                                    fontStyle: "normal",
                                    fontWeight: "600",
                                    fontSize: "26px",
                                    lineHeight: "163.4%",
                                    letterSpacing: "-0.02em",
                                }}
                            >
                                Beginning
                            </RadioBtnDescription>
                        </Box>
                    </Box>

                    {/* Right side container */}
                    <Box
                        sx={{
                            flex: "2",
                            order: "2",
                            "@media (max-width: 1050px)": {
                                order: "1",
                            },
                        }}
                    >
                        <Image
                            width={"756.97px"}
                            height={"449.45px"}
                            src={"/heroImage.png"}
                            alt={"HeroImage"}
                        />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default HeroSection;
