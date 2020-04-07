import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
} from '@material-ui/core';
import {
  AccountCircle as ProfileIcon,
} from '@material-ui/icons';
import { If } from './utils';

const useStyles = makeStyles((theme) => ({
  title: {
		padding: theme.spacing(1),
    fontFamily: 'monospace',
	},
}));

function Navbar() {
  const [menu, setMenu] = useState(null)
  const classes = useStyles();
  const { pathname } = useLocation();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" component="h1">
          	Pandemirus
          </Typography>

          <Box ml='auto'>
            <IconButton color="inherit" onClick={(evt) => setMenu(evt.target)}>
              <ProfileIcon fontSize="large" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Menu open={Boolean(menu)} anchorEl={menu} onClose={() => setMenu(null)}>
        <MenuItem component={Link} onClick={() => setMenu(null)} to="/demographics">Edit Profile</MenuItem>
        <MenuItem component={Link} onClick={() => setMenu(null)} to="/">Logout</MenuItem>
      </Menu>
    </>
  );
}

export default Navbar;
