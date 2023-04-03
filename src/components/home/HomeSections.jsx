import React from "react";
import PageLayout from "../Layouts/PageLayout";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import Slider from "../slider/Slider";
import { SwiperSlide } from "swiper/react";
import { EffectCube, Autoplay } from "swiper";
const HomeSectionStyle = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  height: "100%",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
}));
const SliderStyle = styled(Box)(({ theme }) => ({
  width: "100%",
  textAlign: "center",
  height: "auto",
  margin: "0 auto",
}));
function HomeSections() {
  return (
    <PageLayout className="animate__animated" id="home">
      <HomeSectionStyle>
        <Typography variant="h4">AHMED Y. ABOUELFADL</Typography>
        <SliderStyle>
          <Slider
            effect={"cube"}
            grabCursor={true}
            cubeEffect={{
              shadow: false,
              slideShadows: false,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            modules={[EffectCube, Autoplay]}
            className="mySwiper"
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <Typography color="text.secondary" variant="body1">
                Cyber Security Engineer
              </Typography>
            </SwiperSlide>
            <SwiperSlide>
              <Typography color="text.secondary" variant="body1">
                Communication Engineer
              </Typography>
            </SwiperSlide>
            <SwiperSlide>
              <Typography color="text.secondary" variant="body1">
                CTF player
              </Typography>
            </SwiperSlide>
          </Slider>
        </SliderStyle>
      </HomeSectionStyle>
    </PageLayout>
  );
}

export default HomeSections;
