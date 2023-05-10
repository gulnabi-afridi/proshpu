import React from "react";
import { Box } from "@mui/material";

const RadioBtnDescription = ({ children, sx, ...props }) => {
    return (
        <Box sx={{ marginTop: "1rem" }}>
            {/* Radio button and Description flex box */}
            <Box
                sx={{ display: "flex", justifyContent: "start", alignItems: "center" }}
            >
                {/* Radio button Container */}
                <Box
                    component={"div"}
                    sx={{
                        borderRadius: "50%",
                        border: "2px solid black",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexShrink: "0",
                        width: "22px",
                        height: "22px",
                        position: "relative",
                    }}
                >
                    <Box
                        component={"span"}
                        sx={{
                            borderRadius: "50%",
                            backgroundColor: "black",
                            position: "absolute",
                            width: "10px",
                            height: "10px",
                        }}
                    ></Box>
                </Box>
                {/* Description Box */}
                <Box
                    sx={{
                        marginLeft: "2rem",
                        ...sx,
                    }}
                    {...props}
                >
                    {children}
                </Box>
            </Box>
        </Box>
    );
};

export default RadioBtnDescription;
