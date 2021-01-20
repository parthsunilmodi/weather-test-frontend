import { createActions } from 'redux-actions';
import weatherService from '../../services/weather';

const options = {
  prefix: 'CHART',
};

const chartActions = createActions(
  {
    SET_LOADING: undefined,
    SET_FAILURE: undefined,
    SET_WEATHER_DATA: undefined,
  },
  options,
);

const getWeatherData = () => async dispatch => {
  try {
    dispatch(chartActions.setLoading(true));
    const response = await weatherService.getWeatherDataService();
    dispatch(chartActions.setWeatherData(response));
  } catch (e) {
    dispatch(chartActions.setFailure(e));
  } finally {
    dispatch(chartActions.setLoading(false));
  }
};

export default {
  ...chartActions,
  getWeatherData,
};
