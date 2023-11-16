import {styled} from '@mui/system';
import {Button, Stack} from "@mui/material";

const NavWrapper = styled('Stack')({
    height: '80px',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    justifyContent: 'space-between',
    display: 'flex'
});

function Navigation() {
    return (
        <NavWrapper direction={'row'}>
            <Stack>
                <Button variant={'nav-filled'}>Hello</Button>
                <Button variant={'nav-plain'}>Hello</Button>
            </Stack>
            <div>2</div>
            <div>3</div>
        </NavWrapper>
    )
}

export default Navigation;