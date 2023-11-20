import {Box, Typography, Stack} from "@mui/material";
import AnimationWrapper from "./../../../components/animations/AnimatonWrapper.jsx";

const Icon = () => {
    return (
        <Box sx={{
            width: '25px',
            height: '25px',
            backgroundColor: 'secondary.dark',
            borderRadius: '50%'
        }}/>
    )
}

function Logo() {
    return (
        <Stack direction={'row'} alignItems={'center'} columnGap={1}>
            <AnimationWrapper animate={'growLeft'}>
                <Icon/>
            </AnimationWrapper>
            <AnimationWrapper animate={'growToRight'}>
                      <Typography variant={'logo'}>denytech</Typography>
            </AnimationWrapper>
        </Stack>
    )
}

export default Logo