import { styled } from "@mui/system";
import { Stack } from "@mui/material";
import PhotoCard from "./PhotoCard.jsx";


const StyledContainer = styled(Stack)({
  flexDirection: "column",
  rowGap: 24,
  position: "relative",
});

function Column({ images }) {

  return (
    <StyledContainer>
      {images.map((img, idx) => (
        <PhotoCard
          key={`photocard_slide_${idx + 1}`}
          image={img}
        />
      ))}
    </StyledContainer>
  );
}

export default Column;
