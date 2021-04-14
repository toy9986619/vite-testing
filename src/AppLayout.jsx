import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core/';

const AppLayout = (props) => {
  const { children } = props;

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            天氣預報
          </Typography>
        </Toolbar>
      </AppBar>
      {children}
    </div>
  );
};

export default AppLayout;
