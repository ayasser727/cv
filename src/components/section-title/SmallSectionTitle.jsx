import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

const SectionTitleWrapper = styled(Box)(({ theme }) => ({
  display: "inline-block",
  position: "relative",
  paddingRight: "25px",
  paddingBottom: "10px",
  marginBottom: "10px",
  "&:after": {
    position: "absolute",
    opacity: ".45",
    top: "1px",
    right: "0",
    content: "''",
    height: "30px",
    width: "50px",
    backgroundImage:
      "-webkit-repeating-radial-gradient(center center,#04b4e0,#04b4e0 1px,transparent 0px,transparent 100%)",
    backgroundSize: "6px 6px",
    zIndex: 0,
  },
}));
const SectionTitleH2 = styled(Typography)(({ theme }) => ({
  fontSize: "22px",
  position: "relative",
  fontWeight: "bold",
  zIndex: 1,
  span: {
    color: `${theme.palette.primary.main}`,
  },
}));
function SmallSectionTitle({ title, subTitle }) {
  return (
    <SectionTitleWrapper>
      <SectionTitleH2 variant="h2">
        {title}
        <span> {subTitle}</span>
      </SectionTitleH2>
    </SectionTitleWrapper>
  );
}

export default SmallSectionTitle;
