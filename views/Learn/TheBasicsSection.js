
import React from "react";
import { Box, Container } from "@mui/material";
import Heading from "../../components/ResponsiveH1";
import Image from "next/image";
import TheBasicCard from "../../components/TheBasicsCard";

const TheBasicsSection = () => {
    return (
        // primary container
        <Box>
            {/* Secondary Container */}
            <Container
                sx={{
                    // maxWidth: "950px",
                    padding: "3rem",
                }}
            >
                {/* Heading and tick icon flex container  */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gridGap: "2rem",
                    }}
                >
                    <Heading
                        sx={{
                            fontFamily: "Roboto Slab",
                            fontSize: { xs: "30px", md: "60px" },
                            lineHeight: `150.9%`,
                            fontWeight: "bold",
                        }}
                    >
                        The Basics
                    </Heading>

                    {/* tick and rectangle container */}
                    <Box
                        component={"div"}
                        sx={{
                            borderRadius: "11px",
                            border: "6px solid #303030",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: { md: "56px" },
                            height: { md: "56px" },
                            position: "relative",
                        }}
                    >
                        <Image
                            width="28.22px"
                            height="28.17px"
                            src="/tick.svg"
                            alt="tick"
                        />
                    </Box>
                </Box>

                <TheBasicCard />
            </Container>
        </Box>
    );
};

export default TheBasicsSection;
