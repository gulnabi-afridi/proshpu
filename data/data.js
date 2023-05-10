import React from 'react';
import {Box} from "@mui/system";

export const howProspuhWorkFaqs = [
  {
    id: 1,
    question: `What is Prospuh?`,
    ans: `Prospuh is an effortless and accessible way to invest globally whilst being provided with free investing education so that you can start investing with just $1`
  }, {
    id: 2,
    question: `Who can use your service?`,
    ans: `You have to be 18+ and from one of these countries to use our services currently. (Country list Link)`,
  }, {
    id: 3,
    question: `What are your fees?`,
    ans: <>
      <Box sx={{fontSize: '25px', fontWeight: 'bold'}}>
        For Trading
      </Box>
      We believe that everyone should be able to have access to investing so we would like to make it affordable to
      everyone. We currently charge a $3 or 1.5% commission per trade. There are no hidden costs, no hidden spreads, and
      no monthly or yearly subscription, guaranteed.
      <Box sx={{fontSize: '25px', fontWeight: 'bold'}}>
        Depositing and Withdrawing funds
      </Box>
      We currently charge a 4% depositing fee which is due to the cost of banking fees associated with the deposits in
      The Caribbean.

    </>,
  },
  // {
  //   id: 4,
  //   question: `What is a financial transaction tax (FTT)?`,
  //   ans: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
  // },
  {
    id: 5,
    question: `Do I have to download the app, or do you have a website?`,
    ans: `Our trading product is available only on mobile apps today. We have plans for launching on the web which will be in the near future.`,
  },
  {
    id: 6,
    question: `Can I use my account on both iOS and Android?`,
    ans: `Yes, our service is device agnostic so you can access your account on both iOS and Android devices. Once downloaded you can enter the email address you used to create your account to access it on either device.`,
  },
]

export const managingProspuhAccountFaqs = [
  {
    id: 1,
    question: `What do I need to sign up?`,
    ans: <>
      <Box>
        If you&apos;re 18 or over and a resident in any of these countries you can download the app and start
        onboarding.
        You&apos;ll need to provide basic information like your: <br/> <br/>
      </Box>
      • Name <br/>
      • Address <br/>
      • Nationality <br/>
      • Email Address <br/> <br/>
      These details are a regulatory requirement as we need to be able to report trades with all of the above
      information. We will also need to verify your identity and/or address so it&apos;s good to have relative documents
      handy.
    </>,
  }, {
    id: 2,
    question: `Verifying your identity and address`,
    ans: <>
      As a regulated financial institution, we have obligations to make sure we know who&apos;s using our service. This
      ensures the safety and security of our platform and firm which makes sure our customer&apos;s investments/money is
      safe. This means we may need to verify your identity or address. To do this we&apos;ll ask for relative
      documents. <br/><br/>
      Photo ID documents we accept include(Require 2 from list below): <br/><br/>
      • Passport <br/>
      • Drivers Licence <br/>
      • National ID Cards <br/>
      • Voter&apos;s Card <br/> <br/>
      ID documents must include a photo. When submitting them we’ll require clear, legible copies or photos as well as
      both sides of the card if a national ID or driver&apos;s license.

    </>,
  }, {
    id: 3,
    question: `Providing source of wealth / source of funds`,
    ans: <>
      As a part of Compliance and Regulatory requirements, we sometimes require additional information about how you
      have generated your wealth (source of wealth) and where you have received the funds you have just sent us (source
      of funds).
      <br/> <br/>
      <Box sx={{fontSize: '25px', fontWeight: 'bold'}}>
        Source of Wealth:
      </Box>
      Your source of wealth generally refers to the activities which generated or significantly contributed to your
      overall net worth. This could be the accumulation of your salaried income, financial and other assets such as
      inheritance, investments, property sales, etc
      On top of specifying your source of wealth we may also ask for supporting documentation so we can verify the
      information you provide us. Examples of acceptable source of wealth documents are:
      <br/><br/>
      • Bank Statements <br/>
      • Certified copies of any property sales <br/>
      • Payslips <br/>
      • Certified copies of company accounts <br/>
      • Grant of probate and copy of a Will in case of inheritance <br/>
      • Investment Certificates <br/> <br/>
      <Box sx={{fontSize: '25px', fontWeight: 'bold'}}>
        Source of Funds:
      </Box>
      our source of funds is specific to the particular funds you are using for a particular purpose, in this case
      investing with Prospuh.

    </>,
  }, {
    id: 4,
    question: `I want to update my details`,
    ans: `To change any personal information like your name, address, email or phone number you’ll need to get in touch with our support. To make changes we’ll need a relative document from you, for example, if you’ve moved we’ll require a new proof of address document.`,
  }, {
    id: 5,
    question: `How can I deactivate my account?`,
    ans: `To deactivate your account please get directly in touch with support.`,
  },
  {
    id: 6,
    question: `Why did Prospuh Close my account?`,
    ans: <>
      Finding your account has been closed is a frustrating experience. We’ll never close an account without good
      reason. Unfortunately, due to being a regulated financial institution, we are limited in what we can say about
      account closures.
      It’s generally done to keep our platform safe for our users and to prevent bad actors from committing financial
      crimes.
      <br/><br/>
      Some broad reasons why we close accounts are: <br/> <br/>
      • we spot suspicious activity <br/>
      • we are given false or misleading information <br/>
      • a user has duplicate Prospuh accounts - we only permit one per customer <br/>
      • we have good reason to believe the security of an account has been compromised <br/> <br/>
      You can read more about this in our terms of use policy.
    </>,
  },
  {
    id: 7,
    question: `I want to submit a complaint`,
    ans: <>
      We hope we never give you any reason to complain but if you want to you can: <br/>
      Email us at {" "}
      <Box component={'a'} href={'mailto:complaint@prospuh.com'}
           sx={{
             // textDecoration: 'underline',
             color: '#09791A',
           }}>
        complaint@prospuh.com
      </Box>
    </>,
  },
  {
    id: 8,
    question: `What is a W-8BEN form?`,
    ans: <>
      A W-8BEN - sometimes referred to as a certificate of foreign status - is a requirement to buy US stocks. It’s a declaration that you are not a US tax-paying resident.
      <br/><br/>
      You’ll come across this during the onboarding process when we’re setting up your account.
    </>,
  },
]

export const multiCurrencyAccountsFaqs = [
  {
    id: 1,
    question: `How do your USD accounts work?`,
    ans: `In order to trade US and Europe Based Stocks, we need to convert your current local currency over to United States Dollar. In the Caribbean, this comes with a fee of 5% on the money being processed on deposits of funds. Once deposited your uninvested balance will be in USD.`,
  },
  {
    id: 2,
    question: `My Deposit hasn’t arrived as yet?`,
    ans: `Each deposit may take up to 48 hours to be completed. This is due to the current banking structure in The Caribbean. You will get a notification as soon as your deposit is processed. If you run into further problems email us at support@prospuh.com `
  },
  {
    id: 3,
    question: `How is my money protected as a customer based in the Caribbean?`,
    ans: `All accounts are separately managed with up to $500,000 in SIPC insurance.`
  },
  // {
  //   id: 4,
  //   question: `How is my money protected as a customer based in Europe?`,
  //   ans: ``
  // },
]

export const tradingAndInvestmeFaqs = [
  {
    id: 1,
    question: `Which markets do you currently offer?`,
    ans: `Today our customers have access to over 4000 fractional and non-fractional stocks from US and Europe markets.`,
  },
  {
    id: 2,
    question: `What's coming soon?`,
    ans: `We’re at the very start of our journey and our product offering will evolve over time. Keep your eyes peeled on our social channels for the latest product updates and news.`,
  },
  // {
  //   id: 3,
  //   question: `What is a pattern day trader?`,
  //   ans: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
  // },
  {
    id: 4,
    question: `How will I receive Dividends?`,
    ans: `Your dividends will automatically be credited to your account. You will be able to see your pending payments, and past payments in the Statements & History section via the accounts tab.`,
  },
]
