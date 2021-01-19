import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Spin, Space } from 'antd';
import FusionCharts from 'fusioncharts';
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFusioncharts from 'react-fusioncharts';
// import chartActions from '../../store/chart/actions';
import { getWeatherData, getLoading } from '../../store/chart/selector';

const dataSource = {
  chart: {
    caption: 'Weather Report',
    subcaption: '(As per government records)',
    showvalues: '0',
    numvisibleplot: '12',
    plottooltext: '<b>$dataValue</b> temp_f $label',
    theme: 'fusion',
  },
  categories: [
    {
      category: [
        {
          label: '12.00',
        },
        {
          label: '1.00',
        },
        {
          label: '2.00',
        },
        {
          label: '3.00',
        },
        {
          label: '4.00',
        },
        {
          label: '5.00',
        },
        {
          label: '6.00',
        },
        {
          label: '7.00',
        },
        {
          label: '8.00',
        },
        {
          label: '9.00',
        },
        {
          label: '10.00',
        },
        {
          label: '11.00',
        },
        {
          label: '12.00',
        },
      ],
    },
  ],
  dataset: [
    {
      data: [
        {
          value: '43.2',
        },
        {
          value: '41.7',
        },
        {
          value: '40.1',
        },
        {
          value: '39.6',
        },
        {
          value: '39',
        },
        {
          value: '38.5',
        },
        {
          value: '37.4',
        },
        {
          value: '36.5',
        },
        {
          value: '35.4',
        },
        {
          value: '36.9',
        },
        {
          value: '38.1',
        },
        {
          value: '39.6',
        },
        {
          value: '41',
        },
      ],
    },
  ],
};

const Chart = () => {
  // const dispatch = useDispatch();
  const weatherData = useSelector(getWeatherData);
  const loading = useSelector(getLoading);

  console.log('weather-----', weatherData);
  useEffect(() => {
    charts(FusionCharts);
    // const interval = setInterval(() => {
    //   dispatch(chartActions.getWeatherData());
    // }, 5000);
    // return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <Space size="middle">
        <Spin size="large" />
      </Space>
    );
  }

  return (
    <div>
      <ReactFusioncharts type="scrollline2d" width="70%" height="60%" dataFormat="JSON" dataSource={dataSource} />
    </div>
  );
};

export default Chart;
