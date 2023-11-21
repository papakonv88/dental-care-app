import { useEffect } from "react";
import { Stack } from "@mui/material";
import ImageCard from "./ImageCard.jsx";
import { useAnimate } from "framer-motion";

function ImageMain({ icon, title, image, rotate, idx }) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const animation = async () => {
      await animate(
        scope.current,
        { transform: `translate(0%, 0%) rotate(${rotate}deg)`, y: 0 },
        { duration: 1 }
      );

      await animate(
        scope.current,
        {
          transform: [
            `translate(0%, 0%) rotate(${rotate}deg)`,
            `translate(0%, 0%) rotate(${rotate - 10}deg)`,
            `translate(0%, 0%) rotate(${rotate - 10}deg)`,
          ],
        },
        {
          duration: 1,
          times: [0, 0.7, 1],
          delay: (idx + 1) * 1,
        }
      );

      await animate(
        scope.current,
        {
          transform: `translate(0%, -200%) rotate(${rotate - 10}deg)`,
        },
        {
          duration: 0.5,
        }
      );
    };

    animation();
  }, [rotate, idx]);

  return (
    <Stack
      direction={"column"}
      ref={scope}
      sx={{
        width: "20%",
        position: "absolute",
        zIndex: 100 - idx, // Trick to bring last items to font
        transform: `translate(0%, 150%) rotate(-45deg)`,
      }}
    >
      <ImageCard icon={icon} title={title} image={image} />
    </Stack>
  );
}

export default ImageMain;
