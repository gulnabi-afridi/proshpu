import React, {useState} from 'react';
import Box from "@mui/material/Box";
import {toast} from "react-hot-toast";
import {styled} from "@mui/material/styles";
import PhoneInput from "react-phone-input-2";

const ButtonInput = styled("span")({
  cursor: "pointer",
  background: `#cac9c5`,
  borderTopRightRadius: `8px`,
  borderBottomRightRadius: `8px`,
  fontStyle: `normal`,
  fontWeight: `800`,
  fontSize: `16px`,
  lineHeight: `144.4%`,
  color: ` #0db033`,
  padding: `11.5px 20px`,
  marginTop: `0px`,
  marginLeft: `-5px`,
  display: `block`,
  textAlign: "center",
  "@media (max-width: 520px)": {
    borderRadius: "4px"
  }
});

export const PhoneNumberInput = () => {
  const [phone,setPhone] = useState('');

  const addNumberToDatabase = async () => {
    try {
      if (phone) {
        console.log(phone)
        await addNumberDocument(phone);
        console.log('phone added successfully')
        toast.success('Phone Number added Successfully');
        setPhone(null);
      } else {
        toast.error('Please Add Phone Number');
        setPhone(null);
      }
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }

  }

  return (
    <Box
      sx={{
        display: "flex",
        marginBottom: "60px",
        "@media (max-width: 520px)": {
          flexDirection: "column"
        }
      }}
    >
      <Box
        sx={{
          "@media (max-width: 520px)": {
            marginBottom: "10px"
          }
        }}
      >
        <PhoneInput
          country={"us"}
          value={phone}
          onChange={ph => setPhone(ph)}
          placeholder={"Your phone number"}
        />
      </Box>
      <div>
        <ButtonInput onClick={addNumberToDatabase}>Text me the link</ButtonInput>
      </div>
    </Box>
  );
};
