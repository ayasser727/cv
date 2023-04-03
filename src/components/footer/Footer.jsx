import { Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";

const FooterStyle = styled(Typography)(({ theme }) => ({
  position: "absolute",
  bottom: "10px",
  textAlign: "center",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
}));
function Footer() {
  return (
    <FooterStyle variant="caption" sx={{ color: "text.secondary" }}>
      © 2023 All rights reserved.
    </FooterStyle>
  );
}

export default Footer;
