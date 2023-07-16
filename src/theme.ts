import { createTheme } from "@mui/material";

const theme = createTheme({
    components: {
        MuiContainer: {
            defaultProps: {
                maxWidth: "md",
            },
            styleOverrides: {
                root: {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: "center",
                    padding: "20px",
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    margin: "10px",
                },
            },
        },
        MuiTableCell: {
            variants: [
                {
                  props: { variant: 'head' },
                  style: {
                    fontWeight: 'bold',
                  },
                },
            ],
        },
        MuiAvatar: {
            styleOverrides: {
                root: {
                    height: "20px",
                    paddingRight: "5px",
                },
            },
        },
    },
});

export default theme;
