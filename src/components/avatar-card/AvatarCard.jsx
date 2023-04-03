import { Avatar, Button, Link, Paper, Typography } from "@mui/material";
import React from "react";
import ProfileImg from "@/assets/images/profile.jpg";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const AvatarWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "180px",
  margin: "0 auto",
  zIndex: 1,
  position: "relative",
  "&:after": {
    position: "absolute",
    opacity: 0.3,
    top: "7%",
    left: "7%",
    borderRadius: "300px",
    content: "''",
    height: " calc(100% + 0px)",
    width: " calc(100% + 0px)",
    backgroundImage:
      "-webkit-repeating-radial-gradient(center center,#fff,#fff 1px,transparent 0px,transparent 100%)",
    backgroundSize: "6px 6px",
    zIndex: -1,
  },
}));

const IconsWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignContent: "center",
  justifyContent: "center",
  width: "100%",
  marginTop: "20px",
  marginBottom: "30px",
  svg: {
    transition: "all 0.4s linear",
    margin: "0 3px",
    "&:hover": {
      color: "#fff",
      transform: "translateY(-1px)",
    },
  },
}));

function AvatarCard() {
  return (
    <>
      <AvatarWrapper>
        <Avatar
          sx={{ width: 180, height: 180 }}
          alt="Remy Sharp"
          src={ProfileImg.src}
        />
      </AvatarWrapper>
      <Typography variant="h5" sx={{ mt: 4, mb: 1 }}>
        AHMED Y. ABOUELFADL
      </Typography>
      <Typography sx={{ color: "text.secondary" }} variant="body1">
        Cyber Security Engineer
      </Typography>
      <IconsWrapper>
        <Link href="https://www.linkedin.com/in/ayasser727/" target="_blank">
          <LinkedInIcon sx={{ color: "text.secondary" }} />
        </Link>
        <Link href="https://www.facebook.com/ayasser727" target="_blank">
          <FacebookIcon sx={{ color: "text.secondary" }} />
        </Link>
        <Link href="https://www.twitter.com/ayasser727" target="_blank">
          <TwitterIcon sx={{ color: "text.secondary" }} />
        </Link>
      </IconsWrapper>
    </>
  );
}

export default AvatarCard;
