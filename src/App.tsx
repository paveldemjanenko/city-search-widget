import React from "react";
import { ThemeProvider, useMediaQuery } from "@mui/material";
import getTheme from "./theme";
import { SearchForm } from "./components/SearchForm";

const App: React.FC = () => {
    const isMobileScreen = useMediaQuery('(max-width: 900px)');
    const theme = React.useMemo(() => getTheme(isMobileScreen), [isMobileScreen]);

    return (
        <ThemeProvider theme={theme}>
            <SearchForm />
        </ThemeProvider>
    );
};

export default App;
