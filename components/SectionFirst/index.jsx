import { Stack } from "@mui/material";
import { styled } from "@mui/system";

import SectionWrapper from "./../SectionWrapper.jsx";
import Social from "./../../components/Social/index.jsx";
import YourSmile from "./../../components/YourSmile/index.jsx";
import ScrollDown from "./ScrollDown/index.jsx";
import ImageMain from "./ImageMain/index.jsx";
import { imageData } from "./ImageMain/constants/data.jsx";
import QuoteMain from "./QuoteMain/index.jsx";

const BottomContainer = styled(Stack)({
  position: "absolute",
  bottom: 0,
  right: 0,
  width: "100%",
  justifyContent: "space-between",
});

function SectionFirst() {

  return (
    <>
      <SectionWrapper>
        {imageData.map((data, idx) => (
          <ImageMain
            key={`main_image_${idx}`}
            icon={data.icon}
            title={data.title}
            image={data.link}
            rotate={data.rotate}
            idx={idx}
          />
        ))}
        <QuoteMain />
        <BottomContainer direction={"row"}>
          <YourSmile />
          <Social />
        </BottomContainer>
      </SectionWrapper>
      <ScrollDown />
    </>
  );
}

export default SectionFirst;
