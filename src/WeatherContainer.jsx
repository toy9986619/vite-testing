import React, { useState, useCallback } from 'react';

import WeatherComponent from './WeatherComponent';
import WxItem from './WxItem';
import { getWeather } from './apiClient';

const WeatherContainer = (props) => {
  const [authorization, setAuthorization] = useState('');
  const [weatherData, setWeatherData] = useState({});

  const onAuthorizationChange = useCallback((value) => {
    setAuthorization(value);
  }, []);

  const onSearchClick = useCallback(async () => {
    const response = await getWeather({
      Authorization: authorization,
      format: 'JSON',
      locationName: '臺北市',
    });
    setWeatherData(response.data);
  }, [authorization]);

  const { records = {} } = weatherData;
  const { datasetDescription, location = [] } = records;
  const [locationData = {}] = location;
  const { locationName, weatherElement = [] } = locationData;
  const wxData = weatherElement.find((data) => data.elementName === 'Wx') || {};
  const { time: wxTime = [] } = wxData;

  const WxDataList = wxTime.map((data) => <WxItem data={data} />);

  return (
    <WeatherComponent
      setAuthorization={onAuthorizationChange}
      onSearchClick={onSearchClick}
      datasetDescription={datasetDescription}
      locationName={locationName}
      WxDataList={WxDataList}
    />
  );
};

export default WeatherContainer;
