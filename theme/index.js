import {createTheme} from "@mui/material";

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
    components: {
        MuiButton: {
            variants: [
                {
                    props: { variant: 'nav-filled' },
                    style: {
                        textTransform: 'none',
                        border: `2px solid #FF4E26`,
                        background: '#FF4E26',
                        borderRadius: '25px',
                        color: 'white',
                        padding: '3px 16px',
                        '&:hover': {
                            background: '#FFFFFF',
                            color: '#282628',
                            border: `2px solid #282628`,
                        }
                    },
                },
                {
                    props: { variant: 'nav-plain' },
                    style: {
                        textTransform: 'none',
                        border: `2px solid #282628`,
                        background: 'white',
                        borderRadius: '25px',
                        color: '#282628',
                        padding: '3px 16px',
                        '&:hover': {
                            background: '#FF4E26',
                            color: 'white',
                            border: `2px solid #FF4E26`,
                        }
                    },
                }
            ],
        },
    },
});

export default getTheme;