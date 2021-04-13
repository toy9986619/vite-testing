import React, { useState, useCallback } from 'react';
import { TextField, Container, Button } from '@material-ui/core';

const WeatherComponent = (props) => {
  const { setAuthorization, onSearchClick } = props;
  const onAuthorizationChange = useCallback((event) => {
    setAuthorization(event.target.value);
  }, [setAuthorization]);

  return (
    <Container>
      <form>
        <TextField label="Authorization" onChange={onAuthorizationChange} />
        <Button onClick={onSearchClick}>搜尋</Button>
      </form>
    </Container>
  );
};

export default WeatherComponent;
