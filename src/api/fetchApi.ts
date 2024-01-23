import axios from "axios";

const baseUrl: string = "https://imdb8.p.rapidapi.com";

const options = {
  headers: {
    "X-RapidAPI-Key": "2543153259msh194a376a93b86bfp12bba0jsn738dab5baf3f",
    "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
  },
};

export async function fetchApi(query: string) {
  const response = await axios.get(`${baseUrl}${query}`, options);
  return response;
}
