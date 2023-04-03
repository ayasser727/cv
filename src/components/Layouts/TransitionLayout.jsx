import { Box, Grid, Link, Paper } from "@mui/material";
import { useRef } from "react";
import { styled } from "@mui/material/styles";
import MainBg from "@/assets/images/main_bg.png";
import AvatarCard from "../avatar-card/AvatarCard";
import CustomButton from "../cutom-btn/CustomButton";
import ProfileInfo from "../profile-info/ProfileInfo";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

import HomeSections from "../home/HomeSections";
import AboutSections from "../about/AboutSections";
import ResumeSection from "../resume/ResumeSection";
import Certificate from "../certificate/Certificate";
import Contact from "../contact/Contact";

const MainStyle = styled(Paper)(({ theme }) => ({
  width: "100%",
  height: "100%",
  maxWidth: "1280px",
  margin: "10vh auto",
  background: `transparent`,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundSize: "cover",
  position: "relative",
  padding: "0 20px",
  [theme.breakpoints.down("md")]: {
    margin: "0",
    padding: "0",
  },
}));
const MainWrapper = styled(Paper)(({ theme }) => ({
  borderRadius: "20px",
  width: "100%",

  [theme.breakpoints.down("md")]: {
    borderRadius: "0px",
  },
}));

const PagesWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  height: "80vh",
  [theme.breakpoints.down("md")]: {
    minHeight: "100vh",
  },
}));

const BGImage = styled(Box)(({ theme }) => ({
  background: `url(${MainBg.src})`,
  position: "absolute",
  width: "auto",
  height: "auto",
  top: "-208px",
  left: "0px",
  right: "0",
  bottom: "-280px",
  backgroundPosition: "center center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  zIndex: -1,
}));

function TransitionLayout({ children }) {
  const ref = useRef(null);
  const handelOnMouseMove = (e) => {
    const x = (window.innerWidth - e.pageX * 1) / 100;
    const y = (window.innerHeight - e.pageY * 1) / 100;

    ref.current.style.backgroundPosition = `${x}px ${y}px`;
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        zIndex: 1,
      }}
      onMouseMove={handelOnMouseMove}
    >
      <BGImage ref={ref} />
      <MainStyle elevation={0}>
        <Grid container>
          <Grid item lg={11} md={11} xs={12}>
            <MainWrapper>
              <Grid container spacing={0}>
                <Grid item lg={3} md={4} sm={0}>
                  <ProfileInfo>
                    <AvatarCard />
                    <CustomButton>
                      <Link
                        href="Ahmed.Y.AbouelfadlCV.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Download CV
                      </Link>
                    </CustomButton>
                    <Footer />
                  </ProfileInfo>
                </Grid>
                <Grid item lg={9} md={8} xs={12}>
                  <PagesWrapper>
                    <HomeSections />
                    <AboutSections />
                    <ResumeSection />
                    <Certificate />
                    <Contact />
                  </PagesWrapper>
                </Grid>
              </Grid>
            </MainWrapper>
          </Grid>
          <Grid item lg={1} md={1} xs={12}>
            <Navbar />
          </Grid>
        </Grid>
      </MainStyle>
    </div>
  );
}

export default TransitionLayout;
