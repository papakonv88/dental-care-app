import {Typography, Stack} from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';


function Social() {
    return (
        <Stack direction={'column'} rowGap={1.5}>
            <Stack direction={'row'} columnGap={2} alignItems={'center'}>
                <InstagramIcon sx={{ padding: 1, fontSize: '1.25rem', backgroundColor: 'background.social', borderRadius: '15px', cursor: 'pointer' }}  />
                <FacebookIcon sx={{ padding: 1, fontSize: '1.25rem', backgroundColor: 'background.social', borderRadius: '15px', cursor: 'pointer' }}  />
                <YouTubeIcon sx={{ padding: 1, fontSize: '1.25rem', backgroundColor: 'background.social', borderRadius: '15px',cursor: 'pointer' }}  />
            </Stack>
            <Typography variant={'main'}>Best Start Up of 2023</Typography>
        </Stack>
    )
}

export default Social;