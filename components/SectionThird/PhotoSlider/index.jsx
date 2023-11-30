import { Stack } from "@mui/material";
import { styled } from "@mui/system";
import Column from "./../PhotoSlider/Column.jsx";
import {imageData} from "./constants/data.js";
import {Animations} from "./../../animations/index.js";
import {motion} from "framer-motion";

const StyledContainer = styled(Stack)({
    flexDirection: 'column',
    rowGap: 24,
    position: 'relative',
    width: '50%',
    height: '100%',
})

function PhotoSlider() {

    const slide1 = imageData.slice(0,4)
    const slide2 = imageData.slice(-4)

  return (
    <>
      <StyledContainer component={motion.div} {...Animations.imageSlide1}>
          <Column images={slide1} />
      </StyledContainer>
      <StyledContainer component={motion.div} {...Animations.imageSlide2}>
          <Column images={slide2} />
      </StyledContainer>
    </>
  );
}

export default PhotoSlider;
