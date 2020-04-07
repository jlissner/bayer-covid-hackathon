import React from 'react';
import { Link, useLocation } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Button,
  Divider,
  Grid,
  Typography,
} from '@material-ui/core';
import Page from './Page';
import facebook from '../images/facebook.webp';
import google from '../images/google.png';
import pandemirus from '../images/pandemirus.png';

const useStyles = makeStyles((theme) => ({
  titleLogo: {
    width: '100%',
  },
  title: {
    fontSize: '3.5rem',
    fontFamily: 'monospace',
    fontWeight: 'bold',
    color: theme.palette.error.main,
    textShadow: '3px 3px 1px #333',
  },
  subTitle: {
    marginTop: theme.spacing(-5),
    color: '#777',
    fontSize: '2.125rem',
    paddingBottom: theme.spacing(11),
  },
  button: {
    padding: theme.spacing(4),
  },
  logo: {
    height: theme.spacing(4),
    width: theme.spacing(4),
    marginRight: theme.spacing(2)
  },
}))

function Home() {
  const { pathname } = useLocation();
  const classes = useStyles();

  return (
    <Page key="home" pb={8} display="flex" alignContent="center" alignItems="center" justifyContent="center" flexDirection="column">
      <img className={classes.titleLogo} src={pandemirus} alt="Pandemirus"/>
      {/* <Typography align="center" className={classes.title} variant="h1">Pandemirus</Typography> */}
      <Typography align="center" className={classes.subTitle} variant="h4">Welcome</Typography>

      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Button
            className={classes.button}
            component={Link}
            to='/loading?redirect=/demographics'
            fullWidth
            variant="outlined"
          >
            <img className={classes.logo} src={facebook} alt="Login with Facebook"/>
            Login
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            className={classes.button}
            component={Link}
            to='/loading?redirect=/demographics'
            fullWidth
            variant="outlined"
          >
            <img className={classes.logo} src={google} alt="Login with Google"/>
            Login
          </Button>
        </Grid>
      </Grid>
    </Page>
  )
}

export default Home;
