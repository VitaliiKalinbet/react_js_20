import axios from 'axios';

export const getItems = (serchQuery = 'css', page = 1) => {
  return axios.get(
    `https://hn.algolia.com/api/v1/search?query=${serchQuery}&page=${page}`,
  );
};

export const w = () => null;
