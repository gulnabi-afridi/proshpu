import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import DollarImg from "../../public/dollor.png";

const Title = styled("h1")({
  fontStyle: `normal`,
  fontFamily: "Roboto Slab",
  fontWeight: `700`,
  fontSize: "35px",
  lineHeight: `130.4%`,
  letterSpacing: `0.05em`,
  color: `#303030`,
  "& > span": {
    color: `#05B020`,
  },
  "@media (max-width: 900px)": {
    fontSize: "20px",
    lineHeight: `48px`,
  },
});

const Paragraph = styled("p")({
  fontStyle: `normal`,
  fontWeight: `600`,
  fontFamily: "Roboto Slab",
  fontSize: `19px`,
  lineHeight: `151.4%`,
  color: `#666666`,
  "@media (max-width: 900px)": {
    fontSize: "16px",
    lineHeight: `35px`,
    width: "100%",
  },
});

function Fees({ fees }) {
  return (
    <Box sx={{width: {xs:"100%",md:"666px"},margin:"auto", pt: { xs:"5rem", md:"10rem"},px:{xs:"1rem",md:"0px"} }}>
      {fees.map((feeList, index) => {
        return (
          <Box
            key={index}
            sx={{
              width:"100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              p: "2rem",
              gap: {xs:"5px",md:"30px"},
              borderRadius: "10px",
              background: "#FFFFFF",
              boxShadow: "0px 0px 24px rgba(0, 0, 0, 0.19)",
            }}
          >
            <Box sx={{maxWidth: '56px'}}>
            <Image src={feeList.icon} />
            </Box>
            <Title>{feeList.title}</Title>
            <Paragraph sx={{ textAlign: "center", lineHeight: "30px" }}>
              {feeList.description}
            </Paragraph>
            {feeList.pricing.map((feeType, index) => {
              return (
                <Box
                  key={index}
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    mt: "3rem",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Paragraph sx={{ fontWeight: "500" }}>
                      {feeType.feeType}
                    </Paragraph>
                    <Paragraph
                      sx={{
                        fontSize: "26px",
                        fontWeight: "600",
                        color: "#0AB02B",
                        display:"flex",
                        justifyContent:"end",
                      }}
                    >
                      {feeType.feeAmount}
                    </Paragraph>
                  </Box>
                  {/* bottom border */}
                  <Box
                    sx={{
                      borderBottom: "2px solid rgba(0, 0, 0, 0.15)",
                      mt: "9px",
                    }}
                  ></Box>
                </Box>
              );
            })}
          </Box>
        );
      })}
    </Box>
  );
}

export default Fees;
