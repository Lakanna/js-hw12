import axios from 'axios';

async function getImages(value) {
  const URL = `https://pixabay.com/api/`;
  const API_KEY = `40437222-3b8e1aead0ae08f3118e12752`;
  const params = {
    key: `${API_KEY}`,
    q: `${value}`,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: 1,
    per_page: 15,
  };

  const response = await axios.get(URL, { params });
  return response.data;
}

export default getImages;
