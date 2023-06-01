import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  // border: `1px solid ${theme.palette.divider}`,
  marginBottom: '1rem',
  background: `#F0F0F0`,
  color: `#09791A`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  // flexDirection: 'row-reverse',
  paddingTop: '8px',
  paddingBottom: '8px',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
  "& .MuiTypography-root": {
    fontWeight: 'bold',
    fontSize: '24px',
  }
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  // borderTop: '1px solid rgba(0, 0, 0, .125)',
  color: 'black',
}));

export const Faqs = ({ data }) => {
  const [expanded, setExpanded] = React.useState('panel0');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      {data.map(({ id, question, ans }) => (
        <Accordion key={id} expanded={expanded === `panel${id}`} onChange={handleChange(`panel${id}`)}>
          <AccordionSummary sx={{
            fontWeight: 'bold',
            fontSize: '24px',
          }} aria-controls="panel1d-content" id="panel1d-header">
            <Typography>{question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {ans}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}