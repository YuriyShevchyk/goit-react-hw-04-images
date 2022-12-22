import axios from 'axios';

export async function fetchImages(searchQuery, page) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '30593247-cec71ce7620e4a04353e92bf8';
  const PARAMS = `&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${page}`;
  const URL = `${BASE_URL}?key=${API_KEY}&q=${searchQuery}${PARAMS}`;

  const response = await axios.get(URL);
  return response.data;
}