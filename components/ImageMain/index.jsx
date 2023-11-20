import {Box, Stack, Typography} from "@mui/material";

function ImageMain({icon, title, image, rotate}) {
    return (
        <Stack direction={'column'} sx={{
            width: '20%', position: 'absolute',
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
        }}>
            <Box sx={{
                overflow: 'hidden',
                height: 0,
                paddingTop: '133.33%',
                backgroundColor: 'blue',
                borderRadius: '25px',
                background: `url('${image}')`,
                backgroundSize: 'cover',
                position: 'relative'
            }}>
                <Stack direction={'row'}
                       sx={{
                           position: 'absolute',
                           bottom: '10%',
                           left: '50%',
                           transform: `translateX(-50%)`,
                           opacity: 0.95,
                           width: '100%',
                           display: 'flex',
                           justifyContent: 'center'
                       }}
                       alignItems={'center'}>
                    <Box sx={{
                        backgroundColor: 'background.default',
                        padding: 1,
                        borderRadius: '50%',
                        height: '25px',
                        width: '25px',
                    }}>{icon}</Box>
                    <Typography
                        sx={{
                            fontWeight: 500,
                            padding: '8px 12px',
                            backgroundColor: 'background.default',
                            borderRadius: '25px'
                        }}>{title}</Typography>
                </Stack>
            </Box>
        </Stack>
    )
}

export default ImageMain;