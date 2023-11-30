import {Box, Stack, Typography} from "@mui/material";

function PhotoCard({ image }) {

    return (
        <Box
            sx={{
                overflow: "hidden",
                height: '400px',
                width: '330px',
                borderRadius: "25px",
                background: `url('${image.link}')`,
                backgroundSize: "cover",
                position: "relative",
            }}
        >
            <Stack
                direction={"row"}
                sx={{
                    position: "absolute",
                    bottom: "20px",
                    left: "20px",
                    opacity: 0.95,
                    display: "flex",
                    justifyContent: "flex-start",
                }}
                alignItems={"center"}
            >
                <Typography
                    variant={'photoCard'}
                >
                    {image.title}
                </Typography>
            </Stack>
        </Box>
    );
}

export default PhotoCard;
