import {styled} from '@mui/system';
import {Button, Stack} from "@mui/material";
import SegmentIcon from '@mui/icons-material/Segment';
import Logo from "./Logo/Logo.jsx";
import AnimationWrapper from "./../../components/animations/AnimatonWrapper.jsx";

const NavWrapper = styled('Stack')({
    width: 'calc(100% - 100px)',
    position: 'fixed',
    top: 0,
    left: 0,
    justifyContent: 'space-between',
    display: 'flex',
    padding: '30px 50px',
    zIndex: 101 // Stay on top of everything
});

function Navigation() {
    return (
        <NavWrapper direction={'row'}>
            <AnimationWrapper animate={'fadeDown'}>
                <Stack direction={'row'}>
                    <Button variant={'nav-plain'}>Menu</Button>
                    <Button variant={'nav-plain'}>
                        <SegmentIcon/>
                    </Button>
                </Stack>
            </AnimationWrapper>
            <Logo/>
            <AnimationWrapper animate={'fadeDown'}>
                <Stack direction={'row'}>
                    <Button variant={'nav-plain'}>Log In</Button>
                    <Button variant={'nav-filled'}>
                        Sign Up
                    </Button>
                </Stack>
            </AnimationWrapper>
        </NavWrapper>
    )
}

export default Navigation;