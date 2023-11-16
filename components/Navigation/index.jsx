import { styled } from '@mui/system';

const NavWrapper = styled('Stack')(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    height: '80px',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0
}));

function Navigation() {
    return (
        <NavWrapper>
            Hello
        </NavWrapper>
    )
}

export default Navigation;