import { motion } from "framer-motion";
import { Typography } from "@mui/material";
import AnimationWrapper from "./../../../components/animations/AnimatonWrapper.jsx";

function GetStarted() {
  return (
    <AnimationWrapper
      animate={"getStarted"}
      sx={{ position: "absolute", left: "calc(50% - 75px)" }}
    >
      <motion.svg width="150" height="120">
        <motion.circle
          cx="50%"
          cy="calc(100% - 65px)"
          r="50px"
          fill={"#FF4E26"}
        />
        <Typography
          x={"60px"}
          y={"40%"}
          component={motion.text}
          variant={"getStarted"}
        >
          Get
        </Typography>
        <Typography
            x={"40px"}
            y={"60%"}
            component={motion.text}
            variant={"getStarted"}
        >
          Started
        </Typography>
        <motion.svg y={"60"} height="60">
          <motion.circle
            cx="50%"
            cy="calc(100% - 65px)"
            r="60px"
            stroke={"#FF4E26"}
            fill={"transparent"}
          />
        </motion.svg>
      </motion.svg>
    </AnimationWrapper>
  );
}

export default GetStarted;
