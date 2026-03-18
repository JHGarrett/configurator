import { createTheme } from '@mui/material';

export const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#6b4d36',
        },
        background: {
            default: '#f5f5f4',
            paper: '#ffffff',
        },
        text: {
            primary: '#18181b',
            secondary: '#71717a',
        },
        divider: '#e7e5e4',
    },
    shape: {
        borderRadius: 14,
    },
    typography: {
        fontFamily: 'Inter, Arial, sans-serif',
        h4: {
            fontWeight: 700,
            fontSize: '1.5rem',
        },
        h6: {
            fontWeight: 700,
            fontSize: '0.98rem',
        },
        body1: {
            fontSize: '0.95rem',
        },
        body2: {
            fontSize: '0.88rem',
        },
        button: {
            textTransform: 'none',
            fontWeight: 600,
        },
    },
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    border: '1px solid #e7e5e4',
                    boxShadow: 'none',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    minHeight: 44,
                    borderRadius: 12,
                },
            },
        },
    },
});