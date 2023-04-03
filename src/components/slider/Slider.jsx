import React from "react";
import { Swiper } from "swiper/react";

function Slider({ children, ...props }) {
  return (
    <>
      <Swiper {...props}>{children}</Swiper>
    </>
  );
}

export default Slider;
