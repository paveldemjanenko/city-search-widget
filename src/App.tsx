import { useState, useMemo, useEffect } from "react";
import { IconButton, ThemeProvider, useMediaQuery } from "@mui/material";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import getTheme from "./theme";
import { SearchForm } from "./components/SearchForm";
import { DarkModeContext } from "./contexts/DarkCodeContext";

const App: React.FC = () => {
    const [mode, setMode] = useState<'light' | 'dark'>('light');
    const isMobileScreen = useMediaQuery('(max-width: 900px)');
    const theme = useMemo(() => getTheme(isMobileScreen, mode), [isMobileScreen, mode]);

    // Controlling the dark mode of the app
    const darkMode = useMemo(
        () => ({
            toggleDarkMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );

    // Setting the background color of the app
    useEffect(() => {
        const root = document.documentElement;
        root.style.backgroundColor = mode === 'dark' ? '#000000' : '#ffffff';
    }, [mode]);

    return (
        <DarkModeContext.Provider value={mode}>
            <ThemeProvider theme={theme}>
                <IconButton sx={{ position: "absolute", right: 0, mr: 1 }} onClick={darkMode.toggleDarkMode}>
                    {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
                <SearchForm />
            </ThemeProvider>
        </DarkModeContext.Provider>
    );
};

export default App;
