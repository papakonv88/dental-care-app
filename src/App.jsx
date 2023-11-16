import getTheme from "./../theme/index.js";
import {ThemeProvider} from "@mui/material";
import LandingPage from "./../pages/index.jsx";

function App() {
    const theme = getTheme;
    return (
        <ThemeProvider theme={theme}>
            <LandingPage/>
        </ThemeProvider>
    )
}

export default App
