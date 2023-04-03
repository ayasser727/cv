import React from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const ProfileInfoWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  position: "relative",
  flexDirection: "column",
  width: "100%",
  minHeight: "100%",
  textAlign: "center",
  padding: "80px 0",
  borderRadius: "20px 0px 0 20px",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

function ProfileInfo({ children }) {
  return <ProfileInfoWrapper>{children}</ProfileInfoWrapper>;
}

export default ProfileInfo;
