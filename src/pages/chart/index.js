import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Spin, Space } from 'antd';
import FusionCharts from 'fusioncharts';
import moment from 'moment';
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFusioncharts from 'react-fusioncharts';
import chartActions from '../../store/chart/actions';
import { getWeatherData, getLoading } from '../../store/chart/selector';

const dataSource = {
  chart: {
    caption: 'Weather Report',
    subcaption: '(As per government records)',
    showvalues: '0',
    numvisibleplot: '12',
    plottooltext: '<b>$dataValue</b> temperature in fahrenheit at $label',
    theme: 'fusion',
  },
};

const Chart = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector(getWeatherData);
  const loading = useSelector(getLoading);

  const [chartData, setChartData] = useState(dataSource);

  useEffect(() => {
    charts(FusionCharts);
    const interval = setInterval(() => {
      dispatch(chartActions.getWeatherData());
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const category = (weatherData?.forecast || []).map(data => ({
      label: moment(data.time).format('hh:mm'),
    }));
    const dataset = (weatherData?.forecast || []).map(data => ({
      value: data.temp_f,
    }));
    setChartData({ ...chartData, categories: [{ category }], dataset: [{ data: dataset }] });
  }, [weatherData]);

  if (loading) {
    return (
      <Space size="middle">
        <Spin size="large" />
      </Space>
    );
  }

  return (
    <div>
      <ReactFusioncharts type="scrollline2d" width="70%" height="60%" dataFormat="JSON" dataSource={chartData} />
    </div>
  );
};

export default Chart;
