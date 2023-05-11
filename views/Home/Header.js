import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {styled} from "@mui/material/styles";
import Button from "@mui/material/Button";
import "react-phone-input-2/lib/style.css";
import {PhoneNumberInput} from "../../components/PhoneNumberInput";

const Title = styled("h1")({
    fontStyle: `normal`,
    fontWeight: `900`,
    fontSize: "61px",
    lineHeight: `137.4%`,
    letterSpacing: `0.05em`,
    color: `#fbfaf5`,
    "& > span": {
        color: `#ffe14b`
    },
    "@media (max-width: 900px)": {
        fontSize: "40px",
        lineHeight: `48px`
    }
});
const TinyText = styled("h5")({
    fontStyle: `normal`,
    fontWeight: `500`,
    fontSize: `23px`,
    lineHeight: `144.4%`,
    letterSpacing: `0.05em`,
    color: `#fbfaf5`,
    paddingTop: `60px`
});
const Paragraph = styled("p")({
    fontStyle: `normal`,
    fontWeight: `600`,
    fontSize: `18px`,
    lineHeight: `151.4%`,
    color: `#ebebeb`,
    marginBottom: `50px`
});
const ButtonCustom = styled(Button)({
    fontStyle: `normal`,
    fontWeight: `900`,
    fontSize: `20px`,
    lineHeight: `137.4%`,
    letterSpacing: `0.05em`,
    color: `#fbfaf5`,
    border: `2px solid #fbfaf5`,
    boxSizing: ` border-box`,
    borderRadius: `7px`,
    background: `transparent`,
    padding: `6px 20px`,
    cursor: `pointer`
});

const Header = () => {

    return (
        <Box
            sx={{
                background:
                    "linear-gradient(104.73deg, #05B020 -6.36%, #39AFA3 146.66%)",
                paddingX: "10px",
                paddingY: "10px"
            }}
        >
            <Container maxWidth="xl">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <div className="header">
                            <TinyText>Build your wealth</TinyText>
                            <Title>
                                <span>Putting</span> Ownership in the Hands of the People
                            </Title>
                            <Paragraph>
                                Prospuh makes it simple and accessible for you to invest globally
                            </Paragraph>

                            {/*     Phone Number Input    */}
                            <PhoneNumberInput/>

                            <Box
                                sx={{
                                    marginBottom: "50px",
                                    "@media (max-width: 520px)": {
                                        display: "flex",
                                        justifyContent: "center"
                                    }
                                }}
                            >
                                <ButtonCustom>Invest from 5$</ButtonCustom>
                            </Box>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{display: "flex", justifyContent: "center"}}>
                            <img src="/SplashScreen 1.png" alt=""/>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Header;
