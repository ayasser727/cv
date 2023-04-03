import { styled } from "@mui/material/styles";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const LinkWithActive = styled(Link)(({ theme }) => ({
  "&.active": {
    color: "#02b5e1 !important",
  },
}));
function ActiveLink({ active, children, ...props }) {
  return (
    <LinkWithActive {...props} className={`${active ? "active" : ""}`}>
      {children}
    </LinkWithActive>
  );
}

export default ActiveLink;
