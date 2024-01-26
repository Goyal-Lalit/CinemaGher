import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNmQzMmU1MTUyYWQ2YzE0MGE5YTFlMzMxNWNmZmI5OCIsInN1YiI6IjY1NDc5NTAyMjg2NmZhMDBlMWVmNjhhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lM2Zm8B8Doi35p9azRX1tdFzdx3jYF6vNw5JgoMyOgE";

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};
