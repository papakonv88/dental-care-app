import {Typography, Stack} from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import AnimationWrapper from "./../../components/animations/AnimatonWrapper.jsx";

const AnimatedIcon = ({icon}) => (
    <AnimationWrapper animate={'rotateScale'}>
        {icon}
    </AnimationWrapper>
)

function Social() {
    const styles = {
        iconStyle: {
            padding: 1,
            fontSize: '1.25rem',
            backgroundColor: 'background.social',
            borderRadius: '15px',
            cursor: 'pointer'
        }
    };

    return (
        <Stack direction={'column'} rowGap={1.5}>
            <Stack direction={'row'} columnGap={2} alignItems={'center'}>
                <AnimatedIcon icon={<InstagramIcon sx={styles.iconStyle}/>}/>
                <AnimatedIcon icon={<FacebookIcon sx={styles.iconStyle}/>}/>
                <AnimatedIcon icon={<YouTubeIcon sx={styles.iconStyle}/>}/>
            </Stack>
            <AnimationWrapper animate={'fadeUp'}>
                <Typography variant={'secondary'}>Best Start Up of 2023</Typography>
            </AnimationWrapper>
        </Stack>
    )
}

export default Social;