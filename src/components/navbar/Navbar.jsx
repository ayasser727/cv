import { Paper } from "@mui/material";

import React, { useState } from "react";
import { styled } from "@mui/material/styles";

import { useRouter } from "next/router";
import gsap from "gsap";
import { randomIntFromInterval } from "@/utils/utils";
import CustomDrawer from "../drawer/CustomDrawer";
import ActiveLink from "../activeLink/ActiveLink";
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { SlGraduation } from "react-icons/sl";
import { TbCertificate } from "react-icons/tb";
import { AiOutlineMail } from "react-icons/ai";

const NavbarStyle = styled(Paper)(({ theme }) => ({
  width: "70px",
  display: "flex",
  margin: "0 auto",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "15px 0",
  borderRadius: "35px",
  color: `${theme.palette.text.secondary}`,
  a: {
    padding: "10px",
    fontSize: "32px",
  },
  svg: {
    stroke: 1,
  },
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

function Navbar() {
  const router = useRouter();
  const { id } = router.query;
  const tl = gsap.timeline();
  let [isAnimate, setIsAnimate] = useState(false);

  const effect = [
    {
      nextFrom: { x: "200%", scale: 0 },
      nextTo: {
        visibility: "visible",
        duration: 0.5,
        opacity: 1,
        x: 0,
        scale: 1,
      },
      prevFrom: { x: 0, scale: 1 },
      prevTo: { x: "-200%", scale: 1.2, duration: 0.5 },
      endTo: { visibility: "hidden", opacity: 0, x: 0, scale: 1 },
    },

    {
      nextFrom: { y: "200%", scale: 0 },
      nextTo: {
        visibility: "visible",
        duration: 0.5,
        opacity: 1,
        y: 0,
        scale: 1,
      },
      prevFrom: { y: 0, scale: 1 },
      prevTo: { y: "-200%", scale: 1.2 },
      endTo: {
        visibility: "hidden",
        duration: 0.5,
        opacity: 0,
        y: 0,
        scale: 1,
      },
    },

    {
      nextFrom: { y: "-200%", scale: 1 },
      nextTo: {
        visibility: "visible",
        duration: 0.5,
        opacity: 1,
        y: 0,
      },
      prevFrom: { scale: 1, opacity: 1 },
      prevTo: { scale: 0.1, opacity: 0, duration: 0.2 },
      endTo: {
        visibility: "hidden",
        duration: 0.5,
        opacity: 0,

        scale: 1,
      },
    },
    {
      nextFrom: {
        rotation: 20,
        yPrecent: 20,
        transfornOrigin: "left",
        scale: 1,
      },
      nextTo: {
        rotation: 0,
        yPrecent: 0,
        transfornOrigin: "left",
        visibility: "visible",
        duration: 0.5,
        opacity: 1,
        y: 0,
      },
      prevFrom: { rotation: 0, yPrecent: 0 },
      prevTo: { rotation: -20, yPrecent: -20 },
      endTo: {
        visibility: "hidden",
        duration: 0.5,
        opacity: 0,

        scale: 1,
      },
    },
  ];
  const rand = randomIntFromInterval(0, effect.length - 1);
  const effectClasses = [
    { in: "animate__slideInDown", out: "animate__slideOutDown" },
    { in: "animate__backInRight", out: "animate__backOutLeft" },
  ];

  const handeOnClick = (e, next) => {
    if (id === next) return;
    if (isAnimate) {
      e.preventDefault();
      return;
    }
    setIsAnimate(true);
    // tl.set(`#${next}`, effect[rand].nextFrom)
    //   .to(`#${next}`, effect[rand].nextTo)
    //   .set(`#${id}`, effect[rand].prevFrom)
    //   .to(`#${id}`, effect[rand].prevTo, "-=.30")
    //   .set(`#${id}`, {
    //     ...effect[rand].endTo,
    //     onComplete: () => setIsAnimate(false),
    //   });
    let inClass, outClass;
    const Prev = document.getElementById(id);
    const next1 = document.getElementById(next);

    switch (randomIntFromInterval(0, 11)) {
      case 0:
        inClass = "animate__rotateInDownRight";
        outClass = "animate__lightSpeedOutLeft";
        break;
      case 1:
        inClass = "animate__fadeInRight";
        outClass = "animate__fadeOutLeft";
        break;
      case 2:
        inClass = "animate__backInRight";
        outClass = "animate__backOutLeft";
        break;
      case 3:
        inClass = "animate__fadeInDown";
        outClass = "animate__fadeOutDown";
        break;
      case 4:
        inClass = "animate__slideInDown";
        outClass = "animate__fadeOut";
        break;

      case 5:
        inClass = "animate__flipInX";
        outClass = "animate__fadeOut";
        break;

      case 6:
        inClass = "animate__rotateInDownLeft";
        outClass = "animate__fadeOut";
        break;

      case 7:
        inClass = "animate__fadeIn";
        outClass = "animate__rotateOutDownLeft";
        break;
      case 8:
        inClass = "animate__zoomInDown";
        outClass = "animate__zoomOut";
        break;
      case 9:
        inClass = "animate__zoomIn";
        outClass = "animate__zoomOutUp";
        break;
      case 10:
        inClass = "animate__zoomIn";
        outClass = "animate__flipOutY";
        break;
      case 11:
        inClass = "animate__zoomIn";
        outClass = "animate__lightSpeedOutLeft";
        break;
    }

    next1.classList.add(inClass, "show");
    Prev.classList.add(outClass, "show");

    Prev.addEventListener(
      "animationend",
      function () {
        Prev.classList.remove(outClass);
        Prev.classList.remove("show");
      },
      false
    );

    next1.addEventListener(
      "animationend",
      function () {
        next1.classList.remove(inClass);
        next1.classList.add("show");
        setIsAnimate(false);
      },
      false
    );
  };
  return (
    <>
      <NavbarStyle>
        <ActiveLink
          active={id === "home"}
          onClick={(e) => handeOnClick(e, "home")}
          href={{
            pathname: `/`,
            query: {
              id: "home",
            },
          }}
        >
          <AiOutlineHome />
        </ActiveLink>

        <ActiveLink
          active={id === "about"}
          onClick={(e) => handeOnClick(e, "about")}
          href={{
            pathname: `/`,
            query: {
              id: "about",
            },
          }}
        >
          <BsPerson />
        </ActiveLink>

        <ActiveLink
          active={id === "resume"}
          onClick={(e) => handeOnClick(e, "resume")}
          href={{
            pathname: `/`,
            query: {
              id: "resume",
            },
          }}
        >
          <SlGraduation />
        </ActiveLink>

        <ActiveLink
          active={id === "certificate"}
          onClick={(e) => handeOnClick(e, "certificate")}
          href={{
            pathname: `/`,
            query: {
              id: "certificate",
            },
          }}
        >
          <TbCertificate />
        </ActiveLink>

        <ActiveLink
          active={id === "contact"}
          onClick={(e) => handeOnClick(e, "contact")}
          href={{
            pathname: `/`,
            query: {
              id: "contact",
            },
          }}
        >
          <AiOutlineMail />
        </ActiveLink>
      </NavbarStyle>
      <CustomDrawer handeOnClick={handeOnClick} />
    </>
  );
}

export default Navbar;
