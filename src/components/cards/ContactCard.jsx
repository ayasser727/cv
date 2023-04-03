import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ContactCard({ contact }) {
  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        mb: 2,
        border: "1px solid gray",
      }}
    >
      <CardContent>
        <Typography sx={{ mb: 1.5, color: "primary.main", fontSize: "32px" }}>
          {contact.icon}
        </Typography>
        <Typography variant="body2"> {contact.info}</Typography>
      </CardContent>
    </Card>
  );
}
