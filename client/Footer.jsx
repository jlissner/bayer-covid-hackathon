import React from 'react';
import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Grid,
} from '@material-ui/core';
import footerMap from './images/footer-map.png';

const useSyles = makeStyles((theme) => ({
  footer: {
    background: '#e3e3e3',
  },
  link: {
    color: 'inherit',
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'column',
    padding: 2,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',

    '&:hover': {
      background: 'rgba(0, 0, 0, 0.09)',
    },

    '&.active': {
      background: theme.palette.success.light,
    },
  },
  survey: {
    backgroundImage: `url("${footerMap}")`,
    backgroundPosition: '0 0',
  },
  connect: {
    backgroundImage: `url("${footerMap}")`,
    backgroundPosition: '-70px 0',
  },
  sensors: {
    backgroundImage: `url("${footerMap}")`,
    backgroundPosition: '-140px 0',
  },
  map: {
    backgroundImage: `url("${footerMap}")`,
    backgroundPosition: '-210px 0',
  },
}));

function Footer() {
  const classes = useSyles();
  const { pathname } = useLocation();

  return (
    <Grid container className={classes.footer}>
      <Grid item xs={3}>
        <Link className={classNames([classes.link, { active: pathname === '/survey'}])} to="/survey">
          <Box height={70} width={70} className={classes.survey}/>
          Survey
        </Link>
      </Grid>
      <Grid item xs={3}>
        <Link className={classNames([classes.link, { active: pathname === '/connect'}])} to="/connect">
          <Box height={70} width={70} className={classes.connect}/>
          Connect
        </Link>
      </Grid>
      <Grid item xs={3}>
        <Link className={classNames([classes.link, { active: pathname === '/sensors'}])} to="/sensors">
          <Box height={70} width={70} className={classes.sensors}/>
          Sensors
        </Link>
      </Grid>
      <Grid item xs={3}>
        <Link className={classNames([classes.link, { active: pathname === '/map'}])} to="/map">
          <Box height={70} width={70} className={classes.map}/>
          Map
        </Link>
      </Grid>
    </Grid>
  )
}

export default Footer;
