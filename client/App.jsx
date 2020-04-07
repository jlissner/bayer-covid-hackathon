import React from 'react';
import { hot } from 'react-hot-loader/root';
import {
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';
import {
  Box,
  Paper,
} from '@material-ui/core';
import {
  Future,
  Home,
  Loading,
  Login,
  Assessment,
  Demographics,
  Settings,
} from './Pages';
import { If } from './utils';
import Navbar from './Navbar';

function App() {
  const { pathname } = useLocation();

  return (
    <Box
      height={1}
      display="flex"
      alignItems="center"
      justifyContent="center"
      maxWidth={420}
      margin="auto"
    >
      <Box
        component={Paper}
        m={2}
        width={1}
        overflow="auto"
      >
        <If conditions={[pathname !== '/']}>
          <Navbar />
        </If>

        <Box p={4} height={1}>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>

            <Route path='/loading'>
              <Loading />
            </Route>

            <Route path='/login'>
              <Login />
            </Route>

            <Route path='/assessment'>
              <Assessment />
            </Route>

            <Route path='/demographics'>
              <Demographics />
            </Route>

            <Route path='/settings'>
              <Settings />
            </Route>

            <Route path='/future'>
              <Future />
            </Route>
          </Switch>
        </Box>
      </Box>
    </Box>
  );
}

export default hot(App);
