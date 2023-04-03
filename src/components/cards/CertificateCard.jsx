import * as React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import CustomButton from "../cutom-btn/CustomButton";

const CardImageStyle = styled(CardMedia)(({ theme }) => ({
  width: 151,
  objectFit: "cover",
  filter: "brightness(0.5)",
  transition: `all 0.5s ${theme.transitions.easing.easeInOut}`,
}));
const CardStyle = styled(Card)(({ theme }) => ({
  display: "flex",
  //   background: "#fff",

  transition: `all 0.5s ${theme.transitions.easing.easeInOut}`,

  "&:hover": {
    transform: "translateY(-3px)",
    img: {
      filter: "brightness(1)",
    },
  },
}));

export default function CertificateCard({ cert, onClick }) {
  return (
    <CardStyle elevation={0}>
      <CardImageStyle component="img" image={cert.img.src} alt={cert.title} />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="body1">
            {cert.title}
          </Typography>
          <Typography variant="subtitle1" component="div">
            {cert.subtitle}
          </Typography>
        </CardContent>
        {/* <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <Button
            onClick={onClick}
            sx={{ textTransform: "none", fontSize: "12px" }}
            color="secondary"
          >
            View
          </Button>
        </Box> */}
      </Box>
    </CardStyle>
  );
}
