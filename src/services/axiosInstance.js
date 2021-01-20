import axios from 'axios';

const service = axios.create({});

service.interceptors.response.use(
  response => response.data,
  error => Promise.reject(error),
);

export default service;
