import {createTheme} from "@mui/material";

const getTheme = createTheme({
    palette: {
        primary: {
            main: '#2196f3'
        },
        secondary: {
            main: '#FF4E26',
            dark: '#FF4E28'
        },
        background: {
            default: '#FFFFFF',
            social: '#FFFCEE'
        },
        dark: {
            main: '#282628',
            secondary: '#7E7D7F'
        }
    },
    components: {
        MuiButton: {
            variants: [
                {
                    props: {variant: 'nav-filled'},
                    style: {
                        textTransform: 'none',
                        border: `2px solid #FF4E26`,
                        background: '#FF4E26',
                        borderRadius: '25px',
                        color: 'white',
                        padding: '3px 16px',
                        '&:hover': {
                            color: '#282628'
                        }
                    },
                },
                {
                    props: {variant: 'nav-plain'},
                    style: {
                        textTransform: 'none',
                        border: `2px solid #282628`,
                        background: 'white',
                        borderRadius: '25px',
                        color: '#282628',
                        padding: '3px 12px',
                        '&:hover': {
                            color: '#FF4E26',
                        }
                    },
                }
            ],
        },
    },
    typography: {
        logo: {
            textTransform: 'uppercase',
            fontWeight: '500'
        },
        main: {
            fontSize: '10rem', fontWeight: '400', textTransform: 'uppercase', letterSpacing: '0.3rem'
        },
        secondary: {
            fontSize: '0.875rem', fontWeight: '500'
        },
        screen: {
            fontSize: '8rem', fontWeight: '400', textTransform: 'uppercase', letterSpacing: '0.3rem'
        },
        getStarted: {
            textTransform: 'uppercase',
            fontWeight: '500',
            color: '#FFFFFF',
            textAlign: 'center',
            fill: '#FFFFFF'
        },
        imageCard: {
            fontWeight: 500,
            padding: "12px 12px",
            backgroundColor: "#FFFFFF",
            borderRadius: "25px",
        },
        photoCard: {
            fontWeight: 500,
            padding: "10px 12px",
            backgroundColor: "transparent",
            borderRadius: "25px",
            color: '#FFFFFF',
            border: '2px solid #FFFFFF'
        },
        small: {
            fontSize: '4rem', fontWeight: '400', textTransform: 'uppercase', letterSpacing: '0.3rem'
        },
    }
});

export default getTheme;