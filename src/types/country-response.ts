type Currency = {
    code: string;
    name: string;
    symbol: string;
};

type Language = {
    name: string;
};

export type CountryResponse = {
    capital: string;
    name: string;
    subregion: string;
    flag: string;
    currencies: Array<Currency>;
    languages: Array<Language>;
    timezones: Array<string>;
};
