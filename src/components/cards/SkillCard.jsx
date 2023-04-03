import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const CardStyles = styled(Card)(({ theme }) => ({
  background: "transparent",
  svg: {
    color: `${theme.palette.primary.main}`,
    fontSize: "42px",
    marginBottom: "10px",
  },
}));
export default function SkillCard({ skill }) {
  return (
    <CardStyles elevation={0}>
      <CardContent>
        {skill.Icon}
        <Typography variant="h5" component="div">
          {skill.title}
        </Typography>

        <Typography color="text.secondary" variant="body2">
          {skill.info}
        </Typography>
      </CardContent>
    </CardStyles>
  );
}
