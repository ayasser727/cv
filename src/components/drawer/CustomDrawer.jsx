import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AvatarCard from "../avatar-card/AvatarCard";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import { useRouter } from "next/router";
import ActiveLink from "../activeLink/ActiveLink";
const DrawerBtn = styled(IconButton)(({ theme }) => ({
  backgroundColor: "#02b5e1",
  color: "#fff",
  position: "absolute",
  right: "3%",
  top: "3%",
  display: "none",
  zIndex: 7000,

  [theme.breakpoints.down("md")]: {
    display: "flex",
  },
}));

const DrawerClose = styled(IconButton)(({ theme }) => ({
  backgroundColor: "#02b5e1",
  color: "#fff",
  position: "absolute",
  right: "3%",
  top: "3%",
  display: "none",
  zIndex: 7000,

  [theme.breakpoints.down("md")]: {
    display: "flex",
  },
}));

const DrawerContent = styled(Box)(({ theme }) => ({
  position: "relative",
  padding: "10px 0",
  width: "300px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

export default function CustomDrawer({ handeOnClick }) {
  const [state, setState] = React.useState(false);
  const { query } = useRouter();

  const toggleDrawer = (event) => {
    setState(!state);
  };

  return (
    <div>
      <DrawerBtn color="danger" onClick={toggleDrawer}>
        <MenuIcon sx={{ color: "#fff" }} />
      </DrawerBtn>
      <Drawer anchor="right" open={state} onClose={toggleDrawer}>
        <DrawerClose onClick={toggleDrawer}>
          <CloseIcon sx={{ color: "#fff" }} />
        </DrawerClose>
        <DrawerContent
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
          <AvatarCard />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              fontSize: "20px",
              a: {
                margin: "5px 0",
              },
            }}
          >
            <ActiveLink
              active={query?.id === "home"}
              onClick={(e) => handeOnClick(e, "home")}
              href={{
                pathname: `/`,
                query: {
                  id: "home",
                },
              }}
            >
              Home
            </ActiveLink>

            <ActiveLink
              onClick={(e) => handeOnClick(e, "about")}
              active={query?.id === "about"}
              href={{
                pathname: `/`,
                query: {
                  id: "about",
                },
              }}
            >
              About
            </ActiveLink>

            <ActiveLink
              active={query?.id === "resume"}
              onClick={(e) => handeOnClick(e, "resume")}
              href={{
                pathname: `/`,
                query: {
                  id: "resume",
                },
              }}
            >
              Resume
            </ActiveLink>

            <ActiveLink
              active={query?.id === "certificate"}
              onClick={(e) => handeOnClick(e, "certificate")}
              href={{
                pathname: `/`,
                query: {
                  id: "certificate",
                },
              }}
            >
              Certificate
            </ActiveLink>

            <ActiveLink
              active={query?.id === "contact"}
              onClick={(e) => handeOnClick(e, "contact")}
              href={{
                pathname: `/`,
                query: {
                  id: "contact",
                },
              }}
            >
              Contact
            </ActiveLink>
          </Box>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
