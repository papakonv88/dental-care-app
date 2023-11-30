import { useState } from "react";
import { Stack } from "@mui/material";

import Navigation from "./../components/Navigation/index.jsx";
import SectionFirst from "./../components/SectionFirst/index.jsx";
import SectionSecond from "./../components/SectionSecond/index.jsx";
import SectionThrid from "./../components/SectionThird/index.jsx";

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
  const [activeIdx, setActiveIdx] = useState(0);
  const handleActiveIdx = (swiper) => setActiveIdx(swiper.activeIndex);

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
        onActiveIndexChange={handleActiveIdx}
      >
        <SwiperSlide>
          <SectionFirst isActive={activeIdx === 0} />
        </SwiperSlide>
        <SwiperSlide>
          <SectionSecond isActive={activeIdx === 1} />
        </SwiperSlide>
        <SwiperSlide>
          <SectionThrid isActive={activeIdx === 2} />
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  );
}

export default LandingPage;
