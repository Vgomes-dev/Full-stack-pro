import axios from "axios";

// Base da url: https://api.themoviedb.org/3/
// url da API: /movie/now_playing?api_key=530e51bcde64521c3e793525ba1a43dd

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
});

export default api;
