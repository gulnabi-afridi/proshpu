import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Link from "next/link";
import Logo from '../public/logo.png'
import Image from 'next/image';

const LinkWrap = styled("div")({
  display: 'flex',
  alignItems: 'center',
  "& > a": {
    fontStyle: `normal`,
    fontWeight: `bold`,
    fontSize: `18px`,
    lineHeight: `144.4%`,
    color: `#fbfaf5`,
    padding: `0px 26px`
  },

  "& > .getApp": {
    display: 'inline-block',
    fontStyle: `normal`,
    fontWeight: `bold`,
    fontSize: `18px`,
    lineHeight: `144.4%`,
    letterSpacing: `0.045em`,
    color: ` #1e7813`,
    backgroundColor: `#fbfaf5`,
    borderRadius: `9px`,
    padding: `7px 16px`,
    cursor: `pointer`,
    marginLeft: `26px`,
  },
  // "@media (max-width: 768px)": {
  //   "& > a": {
  //     fontSize: `16px`
  //   }
  // }
});

const Navbar = () => {
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
        <Box
          sx={{
            display: "flex",
            justifyContent: " space-between"
          }}
        >
          <Link href={'/'}>
            <Box>
              <Image src={Logo} alt="" />
            </Box>
          </Link>
          <Box
            sx={{
              display: "flex",
              alignSelf: "center"
            }}
          >
            <LinkWrap>
              {links.map((item, index) => {
                return (
                  <Link key={index} href={item.path}>
                    {item.title}
                  </Link>
                );
              })}
              <div className="getApp">Get the app</div>
            </LinkWrap>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;

const links = [
  {
    title: "Home",
    path:"/"
  },
  {
    title: "Learn",
    path:"/learn"

  },
  {
    title: "Pricing",
    path:"/pricing"

  },
  {
    title: "Help",
    path:"/help"

  },
  {
    title: "About",
    path:"#"
  },
  {
    title: "Services",
    path:"#"
  },
  {
    title: "Contact",
    path:"#"
  }
];
