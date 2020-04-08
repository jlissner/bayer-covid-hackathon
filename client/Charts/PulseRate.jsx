import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Box,
  CircularProgress,
} from '@material-ui/core';
import _map from 'lodash/map';
import LineChart from './LineChart';

function PulseRate() {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get('/pulse-rate').then(({ data }) => {
      setData(_map(data, ({ Time, pulseRate, Diagnosis }) => ({
        x: Time,
        y: pulseRate,
        status: Diagnosis,
      })));
    });
  }, [])

  if (!data) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress />
      </Box>
    )
  }

  return (
    <LineChart
      data={data}
    />
  )
}

export default PulseRate;
