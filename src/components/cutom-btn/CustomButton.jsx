import { Button } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";

const CustomButtonStyle = styled(Button)(({ theme }) => ({
  margin: "auto",
  boxShadow: "none",
  textTransform: "none",
  lineHeight: 1.5,
  borderColor: "#fff",
  color: "#fff",
  borderRadius: "30px",
  padding: "10px 20px",

  "&:hover": {
    borderColor: "#ffffff36",
  },
}));

function CustomButton({ onClick, children, ...props }) {
  return (
    <CustomButtonStyle
      {...props}
      sx={{ margin: "auto" }}
      variant="outlined"
      onClick={onClick}
    >
      {children}
    </CustomButtonStyle>
  );
}

export default CustomButton;
