import { Typography } from "@mui/material";
import React from "react";

const ResponsiveH1 = ({ children, sx, ...props }) => {
    return (
        <Typography
            variant={"h1"}
            sx={{
                fontSize: { xs: "1rem", md: "1.5rem" },
                ...sx,
            }}
            {...props}
        >
            {children}
        </Typography>
    );
};
export default ResponsiveH1;