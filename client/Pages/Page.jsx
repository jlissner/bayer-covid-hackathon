import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';

function Page({ children, ...props }) {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setTimeout(setOpacity, 10, 1);
  }, [])

  return (
    <Box style={{ opacity, transition: '.5s opacity ease-in-out' }} {...props} >
      {children}
    </Box>
  )
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
