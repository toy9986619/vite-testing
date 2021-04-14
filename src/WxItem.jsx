import React from 'react';

import { Box } from '@material-ui/core';

const WxItem = (props) => {
  const { data } = props;
  const { startTime, endTime, parameter: { parameterName } } = data;

  return (
    <Box>
      {`${startTime} ~ ${endTime}: ${parameterName}`}
    </Box>
  );
};

WxItem.defaultProps = {
  data: {},
};

export default WxItem;
