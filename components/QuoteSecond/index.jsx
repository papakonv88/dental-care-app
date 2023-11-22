import { Typography, Box, Stack } from "@mui/material";
import AnimationWrapper from "./../../components/animations/AnimatonWrapper.jsx";

function QuoteSecond() {
  const quote1 = "Revolutionizing";
  const quote2 = "Dental care";
  const quote3 = "with technology";

  return (
    <Stack
      direction={"column"}
      sx={{ width: "100%", height: "100%" }}
      justifyContent={"center"}
      rowGap={"60px"}
    >
      <Box sx={{ overflowY: "hidden", alignSelf: "center" }}>
        <AnimationWrapper animate={"quoteSecond"}>
          <Typography variant={"screen"}>{quote1}</Typography>
        </AnimationWrapper>
      </Box>
      <Box sx={{ overflowY: "hidden", alignSelf: "flex-start" }}>
        <AnimationWrapper animate={"quoteSecond"}>
          <Typography variant={"screen"}>{quote2}</Typography>
        </AnimationWrapper>
      </Box>
      <Box sx={{ overflowY: "hidden", alignSelf: "flex-end" }}>
        <AnimationWrapper animate={"quoteSecond"}>
          <Typography variant={"screen"}>{quote3}</Typography>
        </AnimationWrapper>
      </Box>
    </Stack>
  );
}

export default QuoteSecond;
