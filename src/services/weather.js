import service from './axiosInstance';

const weatherService = {};

weatherService.getWeatherDataService = () =>
  service({
    url: 'https://weather-api-test-guna.herokuapp.com/api/weather',
    method: 'get',
  });

export default weatherService;
