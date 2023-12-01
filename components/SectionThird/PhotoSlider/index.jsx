import { Stack } from "@mui/material";
import { styled } from "@mui/system";
import Column from "./../PhotoSlider/Column.jsx";
import { imageData } from "./constants/data.js";
import { motion } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";

const StyledContainer = styled(Stack)({
  flexDirection: "column",
  rowGap: 24,
  position: "relative",
  width: "auto",
  height: "100%",
});

function PhotoSlider({ isActive }) {
  const [transition, setTransitionValue] = useState(0);

  const column = useRef();

  const slide1 = imageData.slice(0, 4);
  const slide2 = imageData.slice(-4);

  useLayoutEffect(() => {
    if (column?.current) {
      const value =
        column.current.scrollHeight - (column.current.offsetHeight - 24);

      setTransitionValue(value);
    }
  }, []);

  return (
    <>
      <StyledContainer
        ref={column}
        component={motion.div}
        animate={isActive ? "visible" : "hidden"}
        variants={{
          hidden: {
            y: 24,
            opacity: 0,
            rotateY: 45,
          },
          visible: {
            y: [24, 24, -transition],
            opacity: [0, 1, 1],
            rotateY: [90, 0, 0],
            transition: {
              times: [0, 0.33, 1],
              duration: 3,
            },
          },
        }}
      >
        <Column images={slide1} />
      </StyledContainer>
      <StyledContainer
        component={motion.div}
        animate={isActive ? "visible" : "hidden"}
        variants={{
          hidden: {
            y: 24,
            opacity: 0,
            rotateY: 45,
          },
          visible: {
            y: [-transition, -transition, 24],
            opacity: [0, 1, 1],
            rotateY: [90, 0, 0],
            transition: {
              times: [0, 0.33, 1],
              duration: 3,
            },
          },
        }}
      >
        <Column images={slide2} />
      </StyledContainer>
    </>
  );
}

export default PhotoSlider;
