import React, { useState, useCallback } from 'react';
import { TextField, Container, Button, Box } from '@material-ui/core';

const WeatherComponent = (props) => {
  const { datasetDescription, locationName, WxDataList, setAuthorization, onSearchClick } = props;
  const onAuthorizationChange = useCallback((event) => {
    setAuthorization(event.target.value);
  }, [setAuthorization]);

  return (
    <Container>
      <form>
        <TextField label="Authorization" onChange={onAuthorizationChange} />
        <Button onClick={onSearchClick}>搜尋</Button>
      </form>
      <Box>
        {datasetDescription}
      </Box>
      <Box>
        {locationName}
      </Box>
      <Box>
        {WxDataList}
      </Box>
    </Container>
  );
};

WeatherComponent.defaultProps = {
  weatherData: {},
};

export default WeatherComponent;
