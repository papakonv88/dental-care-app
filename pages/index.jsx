import {Stack} from "@mui/material";
import Navigation from "./../components/Navigation/index.jsx";

const Wrapper = ({children}) => (
    <Stack sx={(theme) => ({width: '100%', height: '100vh', background: theme.palette.background.default, position: 'relative'})}>
        {children}
    </Stack>
)


function LandingPage() {
    return (
        <Wrapper>
            <Navigation/>
        </Wrapper>
    )
}

export default LandingPage;