import { createTheme } from "@mui/material";

const getTheme = createTheme({
    palette: {
        primary: {
            main: '#2196f3'
        },
        secondary: {
            main: '#FF4E26',
            dark: '#FF4E27'
        },
        background: {
default: '#FFFFFF'
        }
    },
});

export default getTheme;