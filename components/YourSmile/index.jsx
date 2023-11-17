import {Typography, Stack, Box} from "@mui/material";

function YourSmile() {
    return (
        <Stack sx={{ alignSelf: 'flex-end' }} direction={'column'} rowGap={0.5}>
            <Stack direction={'row'} columnGap={2} alignItems={'flex-start'}>
                <Box sx={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: 'secondary.dark' }}/>
            </Stack>
            <Typography variant={'main'}>Your smile, Our passion</Typography>
        </Stack>
    )
}

export default YourSmile;