import { styled } from "@mui/system";
import { Stack } from "@mui/material";
import SectionWrapper from "./../../components/SectionWrapper.jsx";
import PhotoSlider from "./PhotoSlider/index.jsx";
import Footer from "./../../components/footer/index.jsx";
import WaveText from "./../../components/WaveText/index.jsx";

const StyledContainer = styled(Stack)({
  width: "50%",
  height: "100%",
  position: "relative",
  alignSelf: "flex-start",
  flexDirection: "column",
  justifyContent: "center",
  paddingLeft: "16px",
});

const SliderContainer = styled(Stack)({
  position: "absolute",
  height: "100vh",
  width: "calc(50% - 48px)",
  top: "-80px",
  right: 0,
  flexDirection: "row",
  columnGap: 24,
  justifyContent: 'flex-end',
  paddingLeft: "48px",
});

function SectionThrid({ isActive }) {
  const text = ["explore our", "service, make", "your smile shine"];

  return (
    <>
      <SectionWrapper colunGap={50} direction={"row"}>
        <StyledContainer>
            {text.map((row, idx) => (
              <WaveText
                key={`row_${idx}`}
                quote={row}
                textStyle={"small"}
                isActive={isActive}
              />
            ))}
          <Footer />
        </StyledContainer>
        <SliderContainer>
          <PhotoSlider isActive={isActive} />
        </SliderContainer>
      </SectionWrapper>
    </>
  );
}

export default SectionThrid;
