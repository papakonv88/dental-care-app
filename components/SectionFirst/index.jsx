import SectionWrapper from "./../SectionWrapper.jsx";
import Social from "./../../components/Social/index.jsx";
import { Stack } from "@mui/material";
import YourSmile from "./../../components/YourSmile/index.jsx";
import ScrollDown from "./../../components/ScrollDown/index.jsx";
import ImageMain from "./../../components/ImageMain/index.jsx";
import { imageData } from "./../../components/ImageMain/constants/data.jsx";
import { styled } from "@mui/system";
import QuoteMain from "./../../components/QuoteMain/index.jsx";

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
