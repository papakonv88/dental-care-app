import getTheme from "./../theme/index.js";
import { ThemeProvider, Stack } from "@mui/material";
import Navigation from "./../components/Navigation/index.jsx";


const Wrapper = ({children}) => (
    <Stack sx={{ width: '100vw', height: '100vh', background: 'red', padding: 0, margin: 0 }}>
        {children}
    </Stack>
)


function LandingPage() {
    const theme = getTheme;
return (
    <ThemeProvider theme={theme}>
    <Wrapper>
    <Navigation />
    </Wrapper>
</ThemeProvider>
)
}

export default LandingPage;