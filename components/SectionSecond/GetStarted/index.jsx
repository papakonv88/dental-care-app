import { Box, Typography, Stack } from "@mui/material";
import { motion } from "framer-motion";

function GetStarted() {
  return (
    <motion.svg width="auto" height="120">
      <motion.circle
          cx="50%"
          cy="calc(100% - 65px)"
          r="50px"
          fill={"#FF4E26"}
      />
      <motion.svg y={'60'} height="60">
        <motion.circle
            cx="50%"
            cy="calc(100% - 65px)"
            r="60px"
            stroke={"#FF4E26"}
            fill={"transparent"}
        />
      </motion.svg>
    </motion.svg>
  );
}

export default GetStarted;
