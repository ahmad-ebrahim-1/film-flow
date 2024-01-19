import axios from "axios";

const baseUrl: string = "https://imdb8.p.rapidapi.com";

const options = {
  headers: {
    "X-RapidAPI-Key": "c06cc69c3cmsh64cc8162f926815p16e06fjsn1c3324e05ada",
    "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
  },
};

export async function fetchApi(query: string) {
  const response = await axios.get(`${baseUrl}${query}`, options);
  return response;
}
