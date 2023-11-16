import { createTheme } from "@mui/material/styles";

export const PageTheme = createTheme({
    typography: {
        fontFamily: ['kanit', 'oswald', 'sans-serif'],
    },
    components: {
        MuiButton: {
            styleOverrides: {
                contained: {
                    backgroundColor: '#7F2596',
                    marginTop: '20px',
                    '&:hover': {
                        backgroundColor: '#681e7a',
                    },
                }
            }
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    backgroundColor: '#fff',
                }
            },
        },
        MuiTextField: {
            styleOverrides: {
                notchedOutline: {
                    borderColor: '#fff'
                },
                root: {
                    width: '100%',
                    fontFamily: 'kanit, sans-serif;',
                    '& .MuiInputBase-root': {
                        '& fieldset': {
                            borderColor: '#fff',
                        },
                    },
                    "& .MuiOutlinedInput-root.Mui-focused": {
                        "& > fieldset": {
                            borderColor: "#afafaf"
                        }
                    },
                    '& .MuiInputBase-root:hover': {
                        '& fieldset': {
                            borderColor: '#afafaf',
                        }
                    },
                    '& .MuiFormLabel-root': {
                        color: '#fff',
                    },
                    '& label.Mui-focused': {
                        color: '#afafaf',
                    },
                    '& div': {
                        color: '#fff'
                    },
                },
            },
        },
    },
});
