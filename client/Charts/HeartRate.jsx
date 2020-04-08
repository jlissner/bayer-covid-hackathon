import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Box,
  CircularProgress,
} from '@material-ui/core';
import _map from 'lodash/map';
import LineChart from './LineChart';

function HeartRate() {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get('/heart-rate').then(({ data }) => {
      setData(_map(data, ({ Time, heartRate, Diagnosis }) => ({
        x: Time,
        y: heartRate,
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

export default HeartRate;
