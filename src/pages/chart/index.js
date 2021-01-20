import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import chartActions from '../../store/chart/actions';
import { getWeatherData } from '../../store/chart/selector';
import LineChart from '../../components/LineChart';

const initialData = { forecast: [] };

const Chart = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector(getWeatherData);

  const [chartData, setChartData] = useState(initialData);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(chartActions.getWeatherData());
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setChartData(weatherData);
  }, [weatherData]);

  return <LineChart dataSource={chartData} />;
};

export default Chart;
