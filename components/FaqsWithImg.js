import React from 'react'
import { Typography, Box } from '@mui/material'
import Image from 'next/image';
import { Faqs } from '../views/common/Faqs';

export const FaqsWithImg = ({ withRightImg, imgSrc, heading, faqs }) => {
  return (
    <Box sx={{
      py: "4rem",
      display: 'grid',
      gridTemplateColumns: { xs: '1fr', md: withRightImg ? '2fr 1fr' : '1fr 2fr' },
      gridGap: '5rem',
    }}>

      {/* Left Side Faqs */}
      <Box sx={{
        order: {
          xs: 'unset',
          md: withRightImg ? 0 : 5
        }
      }}>
        <Typography sx={{
          fontSize: '50px',
          fontWeight: "bold",
          textAlign: {
            xs: 'center',
            md: withRightImg ? 'left' : 'right',
          }
        }} variant="h1">
          {heading}
        </Typography>

        <Box sx={{ mt: '3rem' }}>
          <Faqs data={faqs} />
        </Box>

      </Box>

      {/* Right Side Image */}
      <Box sx={{ display: 'flex', alignItems: 'center', 'justifyContent': 'center' }}>
        <Image src={imgSrc} alt="Mobile 1" />
      </Box>

    </Box>
  )
}
