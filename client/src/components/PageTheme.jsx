import { createTheme } from "@mui/material";

export const PageTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: '#7F2596'
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        notchedOutline: {
          borderColor: '#fff'
        },
        root: {
          width: '100%',
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
    '& .MuiFormLabel-root:hover': {
      color: '#afafaf',
  },
  '& label.Mui-focused': {
    color: '#afafaf',
},
        },
      },
    },
  },
});
