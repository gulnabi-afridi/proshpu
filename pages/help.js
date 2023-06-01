import { Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Layout from '../components/Layout'
import Mobile1Img from '../public/mobile-1.png';
import Mobile2Img from '../public/mobile-2.png';
import Mobile3Img from '../public/mobile-3.png';
// import Mobile4Img from '../public/mobile-4.png';


import { howProspuhWorkFaqs, managingProspuhAccountFaqs, multiCurrencyAccountsFaqs, tradingAndInvestmeFaqs } from '../data/data'
import { FaqsWithImg } from '../components/FaqsWithImg'

const Help = () => {
  return (
    <Layout>
      <Box sx={{
        background: `linear-gradient(104.73deg, #05B020 -6.36%, #39AFA3 146.66%)`,
        py: '5rem'
      }}>
        <Typography sx={{
          fontWeight: 'bold',
          color: '#fff',
          textAlign: 'center',
          fontSize: '70px',
          // pt: '3rem',
          pb: '1.5rem',
        }} variant={`h1`}>
          Help Centre
        </Typography>

        <Typography sx={{
          color: '#fff',
          fontSize: '25px',
          textAlign: 'center',
        }} variant={'body1'}>
          Contact us and find answers of your questions
        </Typography>

      </Box>

      <Container maxWidth="lg">

        <FaqsWithImg
          heading={"How does Prospus work?"}
          faqs={howProspuhWorkFaqs}
          imgSrc={Mobile1Img}
          withRightImg
        />

        <FaqsWithImg
          heading={"Managing a Prospuh account"}
          faqs={managingProspuhAccountFaqs}
          imgSrc={Mobile2Img}
          withRightImg={false}
        />

        <FaqsWithImg
          heading={"Multi-currency accounts"}
          faqs={multiCurrencyAccountsFaqs}
          imgSrc={Mobile3Img}
          withRightImg
        />

        <FaqsWithImg
          heading={"Trading & investments"}
          faqs={tradingAndInvestmeFaqs}
          imgSrc={Mobile3Img}
          withRightImga={false}
        />

      </Container>

    </Layout>
  )
}

export default Help