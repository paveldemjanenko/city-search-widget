import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import { SearchForm } from "./components/SearchForm";

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <SearchForm />
        </ThemeProvider>
    );
};

export default App;
