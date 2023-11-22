import { Stack } from "@mui/material";

import Navigation from "./../components/Navigation/index.jsx";
import SectionFirst from "./../components/SectionFirst/index.jsx";
import SectionSecond from "./../components/SectionSecond/index.jsx";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Wrapper = ({ children }) => (
  <Stack
    sx={{
      width: "100%",
      height: "100%",
      background: "background.default",
      overflowY: "hidden",
    }}
  >
    {children}
  </Stack>
);

function LandingPage() {
  return (
    <Wrapper>
      <Navigation />
      <Swiper
        autoHeight={true}
        direction={"vertical"}
        slidesPerView={1}
        mousewheel={true}
        modules={[Mousewheel]}
        style={{ width: "100%", height: "100%" }}
      >
        <SwiperSlide
          style={{ width: "100vw", height: "100%", position: "relative" }}
        >
          <SectionFirst />
        </SwiperSlide>
        <SwiperSlide
          style={{ width: "100vw", height: "100%", position: "relative" }}
        >
          <SectionSecond />
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  );
}

export default LandingPage;
