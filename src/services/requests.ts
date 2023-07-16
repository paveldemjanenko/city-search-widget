import axios, { AxiosError } from "axios";

interface HttpError {
    error: string;
}

export const getRequest = (url: string) => {
    return axios
        .get(url)
        .then(({ data }) => data)
        .catch((err: AxiosError<HttpError>) => {
            throw err?.response?.data?.error;
        })
};
