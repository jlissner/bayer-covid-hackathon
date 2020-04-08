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
import autoDevices from '../images/auto-devices.jpg';
import manualDevices from '../images/manual-devices.jpg';

function Sensors() {
  return (
    <Page key="sensors">
      <Box ml={-2} mb={4} mt={-2}>
        <Button component={Link} to="/assessment"><ChevronLeftIcon/> Back to Dynamic Assessment</Button>
      </Box>
      <Box my={1}>
        <Typography variant="h5">Discount Sensors</Typography>
      </Box>
      <Divider />
      <Box p={1} />
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Button fullWidth variant="outlined">Touchless</Button>
        </Grid>
        <Grid item xs={6}>
          <Button fullWidth variant="outlined">Body Sensor</Button>
        </Grid>
      </Grid>


      <Box my={1} pt={2}>
        <Typography variant="h5">Register Automated Device</Typography>
      </Box>
      <Divider />
      <Box p={1} />
      <Box>
        <img src={autoDevices} alt="Auto Devices" style={{ width: '100%' }} />
      </Box>

      <Box my={1}>
        <Typography variant="h5">Register Manual Device</Typography>
      </Box>
      <Divider />
      <Box p={1} />
      <Box>
        <img src={manualDevices} alt="manual Devices" style={{ width: '100%' }} />
      </Box>

    </Page>
  )
}

export default Sensors;
