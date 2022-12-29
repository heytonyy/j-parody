import { createTheme } from '@mui/material/styles';
import '../css/fonts.css';

export const themeOptions = createTheme({
    palette: {
        background: {
            default: '#0066CC',
        },
        primary: {
            main: '#FFFFFF',
        },
        secondary: {
            main: '#FFCC00',
        },
        error: {
            main: '#f44336',
        },
        info: {
            main: '#ffd600',
        },
    },
    typography: {
        fontFamily: 'Kreon',
    },
});

// Path: client/src/theme/index.ts