import React from "react";
import DollarImg from "../../public/dollor.png";
import AccountImg from "../../public/Account.png";
import TransactionImg from "../../public/Transaction.png";
import {Box} from "@mui/material";

function Pricing() {
  return (
    <div>
      {/*   Top Pricing Section   */}
      {/* <PricingFirstSection/> */}

      <Box sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(12,1fr)',
      }}>
        {/*   Left Background   */}
        <Box
          sx={{
            gridColumn: '1/7',
            width: "100%",
            background: '#0AB02B',
            gridRow: '1/-1',
            height: '885px',
            borderTopRightRadius: '200px',
            '@media only screen and (max-width: 1000px)': {
              gridColumn: '1/-1',
              borderTopRightRadius: '0',
              height: 'unset',
            }
          }}
        />

        {/*     Center Pricing Section    */}
        <Box sx={{
          gridColumn: '2/12',
          gridRow: '1/-1'
        }}>
          {/* <PricingSecSection/> */}
        </Box>
      </Box>

      <Box sx={{
        marginTop: '-35rem',
        position: 'relative',
        '@media only screen and (max-width: 1000px)': {
          marginTop: '0',
        }
      }}>
        {/* <Fees fees={TrendingFees}/> */}
        {/*<Fees fees={AccountFees}/>*/}
        {/* <Fees fees={transactionFees}/> */}
      </Box>

    </div>
  );
}

// trending fees array
const TrendingFees = [
  {
    icon: DollarImg,
    title: "Trading fees",
    description: `Brokers often charge fees (commissions) for using their services. That can really stack up as you start to invest more. You won’t find these fees here.`,
    // description:
    //   "Brokers often charge fees (‘commissions’) for using their services that can really stack up as you start to invest more. You won’t find these fees here",
    pricing: [
      {
        feeType: "Securities",
        feeAmount: "$4.99",
      },
      // {
      //   feeType: "Fractional Shares",
      //   feeAmount: "$3",
      // },
      // {
      //   feeType: "Securities",
      //   feeAmount: "Commission-free",
      // },
    ],
  },
];

const AccountFees = [
  {
    icon: AccountImg,
    title: "Account fees",
    description:
      "Account fees can really range, especially when it comes to custody fees which are a percentage of portfolio value charged annually. Again, you won’t find these here.",
    pricing: [
      // {
      //   feeType: "Opening a multi-currency account",
      //   feeAmount: "$10",
      // },
      {
        feeType: "USD, EUR, GBP account numbers",
        feeAmount: "$10",
      },
      {
        feeType: "Securities custody",
        feeAmount: "Free",
      },
      {
        feeType: "W8-BEN (US Tax form)",
        feeAmount: "Free",
      },
    ],
  },
];

const transactionFees = [
  {
    icon: TransactionImg,
    title: "Transfer Criteria and Expenses",
    description: <>
      Investing in foreign markets involve many different currencies, which can get expensive quite quickly. You won’t
      find these fees hidden anywhere on Prospuh.
    </>,
    // description:
    //   "Investing in foreign markets involves lots of different currencies which can get expensive quite quickly. You won’t find these fees hidden anywhere on Lightyear.",
    pricing: [
      {
        feeType: "Deposits",
        feeAmount: "6.5%",
      },
      {
        feeType: "Withdrawals",
        feeAmount: "$2",
      },
      // {
      //   feeType: "Withdrawal Bounce Back charge",
      //   feeAmount: "$75",
      // },

    ],
  },
];


export default Pricing;