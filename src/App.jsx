import React, { useState, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import WeatherContainer from './WeatherContainer';

function App() {
  return (
    <div className="App">
      <WeatherContainer />
    </div>
  );
}

export default App;
