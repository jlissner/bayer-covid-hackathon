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
import apps from '../images/apps.jpg';

function Connect() {
  return (
    <Page key="connect">
      <Box ml={-2} mb={4} mt={-2}>
        <Button component={Link} to="/assessment"><ChevronLeftIcon/> Back to Dynamic Assessment</Button>
      </Box>
      <Box my={1}>
        <Typography variant="h5">Talk to a Doctor 24/7</Typography>
      </Box>
      <Divider />
      <Box p={1} />
      <Grid container>
        <Grid item xs={4}>
          <Button fullWidth><img src={amwel} alt="amwel" /></Button>
        </Grid>
        <Grid item xs={4}>
          <Button fullWidth><img src={teladoc} alt="Teladoc" /></Button>
        </Grid>
        <Grid item xs={4}>
          <Button fullWidth><img src={mdlive} alt="MDLIVE" /></Button>
        </Grid>
      </Grid>

      <Box my={1}>
        <Typography variant="h5">Register to Donate Plasma</Typography>
      </Box>
      <Divider />
      <Box p={1} />
      <Typography>Search locally for Blood Donations Centers</Typography>


      <Box my={1}>
        <Typography variant="h5">Access Medical Records</Typography>
      </Box>
      <Divider />
      <Box p={1} />
      <Box>
        <img src={medicalRecords} alt="Medical Records" style={{ width: '100%' }} />
      </Box>

      <Box my={1}>
        <Typography variant="h5">Sync Health App Data</Typography>
      </Box>
      <Divider />
      <Box p={1} />
      <Box>
        <img src={apps} alt="Apps" style={{ width: '100%' }} />
      </Box>
    </Page>
  )
}

export default Connect;
