import { ChangeEvent, useState, useEffect } from "react";
import { Container, TextField, Button } from "@mui/material";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { RootState } from "../../store/store";
import { DataTable } from "../DataTable";
import { fetchCountry } from "./countrySlice";
import { sortBy } from "lodash";
import { CountryResponse } from "../../types/country-response";

const SearchForm: React.FC = () => {
    const dispatch = useAppDispatch();
    const { data = [], error } = useAppSelector((state: RootState) => state.country);

    const [capital, setCapital] = useState<string>('');
    const [sortedData, setSortedData] = useState<Array<CountryResponse>>([]);

    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const sortData = sortBy(data, 'capital');
        setSortedData(sortData);
    }, [data]);

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
                error={isError || !!error}
                helperText={isError || error ? 'No results found.' : ''}
                onKeyDown={(e) => handleKeyDown(e.key)}
            />
            <Button
                variant="contained"
                disabled={!capital.length}
                onClick={handleClick}
            >
                Search
            </Button>
            {sortedData.length > 0 && <DataTable data={sortedData} />}
        </Container>
    );
};

export default SearchForm;
