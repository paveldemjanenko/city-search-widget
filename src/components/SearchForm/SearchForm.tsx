import { ChangeEvent, useState } from "react";
import { Container, TextField, Button } from "@mui/material";
import { getRequest } from "../../services/requests";
import { DataTable } from "../DataTable";
import { CountryResponse } from "../../types/country-response";
import { sortBy } from "lodash";

const SearchForm: React.FC = () => {
    const [capital, setCapital] = useState<string>('');
    const [searchResponse, setSearchResponse] = useState<Array<CountryResponse>>([]);
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
        getRequest(`https://restcountries.com/v2/capital/${capital}`)
            .then((res) => {
                const sortedRes = sortBy(res, 'capital');
                setSearchResponse(sortedRes);
            })
            .catch(() => {
                setIsError(true);
                setSearchResponse([]);
            });
    };

    console.log(searchResponse, 'TEST');
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
            {searchResponse.length > 0 && <DataTable data={searchResponse} />}
        </Container>
    );
};

export default SearchForm;
