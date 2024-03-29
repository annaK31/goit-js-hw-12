import axios from 'axios';
import { limit, page } from '../main';

export async function fetchImages(query) {
  query = encodeURIComponent(query);
  const myApiKey = '42609290-856768105ab9e79485c69bf61';
  const params = new URLSearchParams({
    per_page: limit,
    page: page,
    key: myApiKey,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });
  const response = await axios.get(
    `https://pixabay.com/api/?${params}&q=${query}`
  );
  return response.data;
}