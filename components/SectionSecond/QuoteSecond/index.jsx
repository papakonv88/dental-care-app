import { Typography, Box, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { Animations } from "./../../../components/animations/index.js";

function QuoteSecond({ isActive }) {
  const quote1 = "Revolutionizing";
  const quote2 = "Dental";
  const quote3 = "care";
  const quote4 = "with technology";

  const { quoteSecondText, texToLeft, textToRightSlow, textToRightFast } = Animations;

  return (
    <Stack
      direction={"column"}
      sx={{ width: "100%", height: "100%" }}
      justifyContent={"center"}
      rowGap={"60px"}
      component={motion.div}
      animate={isActive ? "visible" : "initial"}
    >
      <Box
        component={motion.div}
        variants={texToLeft}
        sx={{ overflowY: "hidden" }}
      >
        <motion.div variants={quoteSecondText}>
          <Typography variant={"screen"}>{quote1}</Typography>
        </motion.div>
      </Box>
      <Stack
        direction={"row"}
        columnGap={6}
        sx={{ overflowY: "hidden", width: '100%' }}
      >
        <Box component={motion.div} variants={textToRightSlow}>
          <motion.div variants={quoteSecondText}>
            <Typography variant={"screen"}>{quote2}</Typography>
          </motion.div>
        </Box>
        <Box component={motion.div} variants={textToRightFast}>
          <motion.div variants={quoteSecondText}>
            <Typography variant={"screen"}>{quote3}</Typography>
          </motion.div>
        </Box>
      </Stack>
      <Box
        component={motion.div}
        variants={texToLeft}
        sx={{ overflowY: "hidden" }}
      >
        <motion.div variants={quoteSecondText}>
          <Typography variant={"screen"}>{quote4}</Typography>
        </motion.div>
      </Box>
    </Stack>
  );
}

export default QuoteSecond;
