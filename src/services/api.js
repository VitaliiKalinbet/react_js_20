import axios from 'axios';

export const searchShows = query =>
  axios.get(`http://api.tvmaze.com/search/shows?q=${query}`);

export const searchExactShow = id =>
  axios.get(`http://api.tvmaze.com/shows/${id}`);
