import { Typography, Stack, Box } from "@mui/material";
import AnimationWrapper from "./../../components/animations/AnimatonWrapper.jsx";

function YourSmile() {
  return (
    <Stack sx={{ alignSelf: "flex-end" }} direction={"column"} rowGap={0.5}>
      <Stack
        direction={"row"}
        columnGap={2}
        alignItems={"flex-start"}
      >
        <AnimationWrapper
          animate={"scaleUp"}
        >
          <Box
            sx={{
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              backgroundColor: "secondary.dark",
            }}
          />
        </AnimationWrapper>
      </Stack>
      <AnimationWrapper animate={"fadeUp"}>
        <Typography variant={"secondary"}>Your smile, Our passion</Typography>
      </AnimationWrapper>
    </Stack>
  );
}

export default YourSmile;
