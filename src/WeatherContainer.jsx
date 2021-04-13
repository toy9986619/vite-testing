import React, { useState, useCallback } from 'react';

import WeatherComponent from './WeatherComponent';
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

  return (
    <WeatherComponent
      setAuthorization={onAuthorizationChange}
      onSearchClick={onSearchClick}
    />
  );
};

export default WeatherContainer;
