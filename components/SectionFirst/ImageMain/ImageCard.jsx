import { Box, Stack, Typography } from "@mui/material";

function ImageCard({ icon, title, image }) {
  return (
    <Box
      sx={{
        overflow: "hidden",
        height: 0,
        paddingTop: "133.33%",
        borderRadius: "25px",
        background: `url('${image}')`,
        backgroundSize: "cover",
        position: "relative",
      }}
    >
      <Stack
        direction={"row"}
        sx={{
          position: "absolute",
          bottom: "10%",
          left: "50%",
          transform: `translateX(-50%)`,
          opacity: 0.95,
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
        alignItems={"center"}
      >
        <Box
          sx={{
            backgroundColor: "background.default",
            borderRadius: "50%",
            padding: '8px 12px'
          }}
        >
          {icon}
        </Box>
        <Typography variant={"imageCard"}>{title}</Typography>
      </Stack>
    </Box>
  );
}

export default ImageCard;
