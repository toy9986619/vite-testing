import React from 'react';
import WeatherContainer from './WeatherContainer';
import AppLayout from './AppLayout';

function App() {
  return (
    <div className="App">
      <AppLayout>
        <WeatherContainer />
      </AppLayout>
    </div>
  );
}

export default App;
