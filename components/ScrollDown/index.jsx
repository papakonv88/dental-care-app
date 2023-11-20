import {Box} from "@mui/material";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import AnimationWrapper from "./../../components/animations/AnimatonWrapper.jsx";

function ScrollDown() {
    return (
        <AnimationWrapper animate={'outerCircle'}>
            <Box sx={(theme) => ({
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                border: `1px solid ${theme.palette.dark.secondary}`,
                position: 'absolute',
                bottom: -20,
                left: '50%',
                transform: 'translate(-50%, 0)',
                display: 'flex',
                justifyContent: 'center'
            })}>
                <AnimationWrapper animate={'innerArrow'}>
                    <ArrowDownwardIcon sx={{color: 'dark.secondary', fontSize: '2rem'}}/>
                </AnimationWrapper>
            </Box>
        </AnimationWrapper>
    )
}

export default ScrollDown;