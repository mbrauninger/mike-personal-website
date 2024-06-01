import '@fontsource/montserrat';
import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fff',
        },
    },
    typography: {
        fontFamily: 'montserrat',
    },
    breakpoints: {
        values: {
            xs: 0, // Extra small devices (phones, less than 600px)
            sm: 600, // Small devices (portrait tablets and large phones, 600px and up)
            md: 960, // Medium devices (landscape tablets, 960px and up)
            lg: 1280, // Large devices (laptops/desktops, 1280px and up)
            xl: 1920, // Extra large devices (large desktops, 1920px and up)
        },
    },
});

export default theme;
