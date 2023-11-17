import {Stack} from "@mui/material";
import Navigation from "./../components/Navigation/index.jsx";
import SectionFirst from "./../components/SectionFirst/index.jsx";


const Wrapper = ({children}) => (
    <Stack sx={(theme) => ({width: '100%', height: '100%', background: theme.palette.background.default})}>
        {children}
    </Stack>
)


function LandingPage() {
    return (
        <Wrapper>
            <Navigation/>
            <SectionFirst/>
        </Wrapper>
    )
}

export default LandingPage;