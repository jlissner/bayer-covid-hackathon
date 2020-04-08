import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Button,
  Divider,
  Typography,
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import _map from 'lodash/map';
import { useGlobalState } from '../hooks';
import Page from './Page';

const initialSurveys = [
  { date: 'April 7th, 6:12pm' },
  { date: 'April 7th, 9:38am' },
  { date: 'April 6th, 3:02pm' },
  { date: 'April 5th, 7:05pm' },
  { date: 'April 4th, 9:23pm' },
]

function Survey() {
  const [surveys] = useGlobalState('surveys', initialSurveys)

  return (
    <Page key="survey">
      <Box ml={-2} mb={4} mt={-2}>
        <Button component={Link} to="/assessment"><ChevronLeftIcon/> Back to Dynamic Assessment</Button>
      </Box>
      <Box my={1}>
        <Button component={Link} to="/new-survey" color="primary" fullWidth variant="contained">Start New Survey</Button>
      </Box>
      <Box p={1} />
      <Box my={1}>
        <Typography variant="h5">Survey History</Typography>
      </Box>
      <Divider />
      <Box p={1} />
      {_map(surveys, ({ date }) => (
        <Button variant="outlined" fullWidth style={{ marginBottom: 12 }}>{date}</Button>
      ))}
    </Page>
  )
}

export default Survey;
