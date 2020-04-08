import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Button,
  Divider,
  Grid,
  Typography,
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Page from './Page';
import amwel from '../images/amwel.jpg';
import teladoc from '../images/teladoc.jpg';
import mdlive from '../images/mdlive.jpg';
import medicalRecords from '../images/medical-records.jpg';
import map from '../images/map.jpg';

function Map() {
  return (
    <Page key="map">
      <Box ml={-2} mb={4} mt={-2}>
        <Button component={Link} to="/assessment"><ChevronLeftIcon/> Back to Dynamic Assessment</Button>
      </Box>

      <Box my={1}>
        <Typography variant="h5">Hotspots to Avoid</Typography>
      </Box>
      <Divider />
      <Box p={1} />
      <Box>
        <img src={map} alt="Map" style={{ width: '100%' }} />
      </Box>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Button fullWidth variant="outlined">Scan Grocery Stores</Button>
        </Grid>
        <Grid item xs={12}>
          <Button fullWidth variant="outlined">Scan Hospitals</Button>
        </Grid>
        <Grid item xs={12}>
          <Button fullWidth variant="outlined">Scan Open Parks</Button>
        </Grid>
      </Grid>
    </Page>
  )
}

export default Map;
