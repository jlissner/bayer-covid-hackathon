import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Button,
  Divider,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Grid,
  Typography,
} from '@material-ui/core';
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';
import _startCase from 'lodash/startCase';
import Page from './Page';
import QRCode from 'qrcode.react';
import {
  HeartRate,
  PulseRate,
  RespiratoryRate,
} from '../Charts';

const useStyles = makeStyles((theme) => ({
  caption: {
    color: '#777',
  },
  h: {
    height: 24,
    width: 24,
    border: '1px solid #333',
    background: theme.palette.success.light,
    borderRadius: '50%',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 2,
    position: 'relative',
    top: 1,
  },

  a: {
    height: 24,
    width: 24,
    border: '1px solid #333',
    background: theme.palette.warning.light,
    borderRadius: '50%',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 2,
    paddingLeft: 1,
    position: 'relative',
    top: 0,
  },
  status: {
    fontSize: '1.2rem',

    '&:after': {
      content: '""',
      zIndex: -1,

    },
  },
  statusTitle: {
    marginRight: theme.spacing(1),
    fontSize: '1.2rem',
  },
}));

function Profile() {
  const classes = useStyles();
  const [expanded, setExpanded] = useState();

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Page key="register">
      <Box my={1}>
        <Typography variant="h5">Dynamic Assessment</Typography>
      </Box>
      <Divider />
      <Box py={1}>
        <Typography className={classes.caption}>Track your health with infected comparables</Typography>
      </Box>
      <Box py={1} display="flex">
        <Typography className={classes.statusTitle}>You are:</Typography>
        <Typography className={classes.status}><span className={classes.h}>H</span>ealthy, on <span className={classes.a}>A</span>lert</Typography>
      </Box>
      <Box py={1} />
      <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography><span className={classes.h}>H</span>&nbsp;&nbsp;&nbsp;Respiratory Rate</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Box width={1}>
            <RespiratoryRate />
          </Box>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography><span className={classes.h}>H</span>&nbsp;&nbsp;&nbsp;Heart Rate</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Box width={1}>
            <HeartRate />
          </Box>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography><span className={classes.a}>A</span>&nbsp;&nbsp;&nbsp;Pulse Rate</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Box width={1}>
            <PulseRate />
          </Box>
        </ExpansionPanelDetails>
      </ExpansionPanel>

    </Page>
  );
}

export default Profile;
