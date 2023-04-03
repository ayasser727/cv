import React from "react";
import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";
const PageLayoutStyle = styled(Paper)(({ theme }) => ({
  position: "absolute",
  backgroundColor: "#222",
  height: "100%",
  width: "100%",
  borderRadius: "20px",
  padding: "60px",
  opacity: 0,
  overflow: "auto",
  visibility: "hidden",
  backfaceVisibility: "hidden",
  transform: "translate3d(0,0,0)",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundPosition: "50% 50%",
  backgroundSize: "cover",

  [theme.breakpoints.down("md")]: {
    borderRadius: "0px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "60px 10px",
  },
  "&.show": {
    visibility: "visible",
    opacity: 1,
    backfaceVisibility: "visible",
  },
}));
function PageLayout({ children, ...props }) {
  return <PageLayoutStyle {...props}>{children}</PageLayoutStyle>;
}

export default PageLayout;
