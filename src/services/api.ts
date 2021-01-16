import axios from 'axios';

const api = axios.create({
  baseURL: 'https://onjob-api.herokuapp.com',
});

export default api;
