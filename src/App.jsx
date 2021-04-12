import React, { useState, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyle = makeStyles();

function App() {
  const [authorization, setAuthorization] = useState('');
  const classes = useStyle();

  const onAuthorizationChange = useCallback((event) => {
    setAuthorization(event.target.value);
  }, []);

  return (
    <div className="App">
      <form className={classes.root}>
        <TextField label="Authorization" onChange={onAuthorizationChange}/>
      </form>
    </div>
  )
}

export default App;
