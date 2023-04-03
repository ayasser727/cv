import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Grid, Typography } from "@mui/material";

const InfoWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignContent: "center",
  justifyContent: "center",
  textAlign: "left",
  marginBottom: "4em",
  h6: {
    fontWeight: "bold",
    color: `${theme.palette.primary.main}`,
    span: {
      display: "inline-block",
      marginLeft: "10px",
      fontWeight: "normal",
      color: `${theme.palette.text.secondary}`,
    },
  },
}));
function AboutInfo() {
  return (
    <Grid container spacing={3}>
      <Grid item sm={6}>
        <Typography
          variant="subtitle2"
          color="text.secondary"
          sx={{
            lineHeight: "2em",
          }}
        >
          I am a Communication Engineer, a CTF player, and a Researcher in the
          DFIR with many field projects and a verifiable track record in student
          activities management.
        </Typography>
      </Grid>
      <Grid item sm={6}>
        <InfoWrapper>
          <Typography variant="subtitle1">
            Age
            <Typography variant="body2" color="text.primary" component="span">
              25
            </Typography>
          </Typography>
          <Typography variant="subtitle1">
            Residence
            <Typography variant="body2" color="text.primary" component="span">
              Egypt
            </Typography>
          </Typography>
          <Typography variant="subtitle1">
            Address
            <Typography variant="body2" color="text.primary" component="span">
              Minufiyah - Egypt
            </Typography>
          </Typography>
          <Typography variant="subtitle1">
            Email
            <Typography variant="body2" color="text.primary" component="span">
              ayasser727@gmail.com
            </Typography>
          </Typography>
          <Typography variant="subtitle1">
            Phone
            <Typography color="text.primary" variant="body2" component="span">
              +20 11 5240 6798
            </Typography>
          </Typography>
        </InfoWrapper>
      </Grid>
    </Grid>
  );
}

export default AboutInfo;
