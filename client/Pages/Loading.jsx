import React, { useEffect } from 'react';
import { useHistory, useLocation, } from 'react-router-dom';
import {
  Box,
  CircularProgress,
  Divider,
  Typography,
} from '@material-ui/core';
import qs from 'query-string';
import Page from './Page';

function Loading() {
  const history = useHistory();
  const { search } = useLocation();
  const {
    redirect = '/',
    title = 'Authenticating',
  } = qs.parse(search);

  useEffect(() => {
    const timeout = setTimeout(() => {
      history.push(redirect)
    }, 2000);

    return () => {
      clearTimeout(timeout);
    }
  }, [history, redirect]);

  return (
    <Page key="loading">
      <Box my={1}>
        <Typography align="center" variant="h5">{title}</Typography>
      </Box>
      <Divider />
      <Box p={1} />
      <Box
        display="flex"
        justifyContent="center"
        p={4}
      >
        <CircularProgress size={80} />
      </Box>
    </Page>
  );
}

export default Loading;
