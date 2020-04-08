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
  Connect,
  Home,
  Loading,
  Assessment,
  Sensors,
  Map,
  Survey,
  Demographics,
  NewSurvey,
} from './Pages';
import { If } from './utils';
import Footer from './Footer';
import Navbar from './Navbar';

function App() {
  const { pathname } = useLocation();
  const isHomePage = pathname === '/';

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
        maxHeight="80vh"
      >
        <If conditions={[!isHomePage]}>
          <Navbar />
        </If>

        <Box p={4} height={1}>
          <Switch>
            <Route path='/connect'>
              <Connect />
            </Route>

            <Route exact path='/'>
              <Home />
            </Route>

            <Route path='/new-survey'>
              <NewSurvey />
            </Route>

            <Route path='/map'>
              <Map />
            </Route>

            <Route path='/loading'>
              <Loading />
            </Route>

            <Route path='/assessment'>
              <Assessment />
            </Route>

            <Route path='/sensors'>
              <Sensors />
            </Route>

            <Route path='/demographics'>
              <Demographics />
            </Route>

            <Route path='/survey'>
              <Survey />
            </Route>
          </Switch>
        </Box>
        <If conditions={[!isHomePage]}>
          <Footer />
        </If>
      </Box>
    </Box>
  );
}

export default hot(App);
