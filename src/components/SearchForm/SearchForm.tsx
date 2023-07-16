import { ChangeEvent, useState } from "react";
import { Container, TextField, Button } from "@mui/material";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { RootState } from "../../store/store";
import { DataTable } from "../DataTable";
import { fetchCountry } from "./countrySlice";

const SearchForm: React.FC = () => {
    const dispatch = useAppDispatch();
    const { data = [] } = useAppSelector((state: RootState) => state.country);

    const [capital, setCapital] = useState<string>('');

    const [isError, setIsError] = useState(false);

    const handleCapitalChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCapital(e.target.value);
        setIsError(false);
    };

    const handleBlur = () => {
        if (capital === '') {
          setIsError(true);
        }
    };

    const handleKeyDown = (e: string) => {
        if (e === 'Enter') {
          handleClick();
        }
    };

    const handleClick = () => {
        dispatch(fetchCountry(capital));
    };

    return (
        <Container>
            <TextField
                id="outlined-basic"
                label="Please input capital name"
                variant="outlined"
                onChange={handleCapitalChange}
                onBlur={handleBlur}
                error={isError}
                helperText={isError ? 'No results found.' : ''}
                onKeyDown={(e) => handleKeyDown(e.key)}
            />
            <Button
                variant="contained"
                disabled={!capital.length}
                onClick={handleClick}
            >
                Search
            </Button>
            {data.length > 0 && <DataTable data={data} />}
        </Container>
    );
};

export default SearchForm;
