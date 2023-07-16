import { createTheme } from "@mui/material";

const getTheme = (isMobileScreen: boolean, mode: 'light' | 'dark') =>
    createTheme({
        palette: {
            mode,
        },
        components: {
            MuiContainer: {
                defaultProps: {
                    maxWidth: isMobileScreen ? "sm" : "md",
                },
                styleOverrides: {
                    root: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        padding: "20px",
                    },
                },
            },
            MuiButton: {
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
            MuiTableContainer: {
                styleOverrides: {
                    root: {
                        maxWidth: isMobileScreen ? "90%" : 500,
                    },
                },
            },
        },
    });

export default getTheme;
