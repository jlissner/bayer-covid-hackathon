import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Box,
  Button,
  Divider,
  Typography,
} from '@material-ui/core';
import Form from '../Form';
import Page from './Page';
import { useGlobalState } from '../hooks';

function Register() {
  const { push } = useHistory();
  const [user, setUser] = useGlobalState('user', {
    ageRange: '',
    allowLocation: false,
    gender: '',
    hispancLatino: false,
    race: '',
  });

  return (
    <Page key="register">
      <Box my={1}>
        <Typography variant="h5">Demographics</Typography>
      </Box>
      <Divider />
      <Box p={1} />
      <Form
        form={[
          {
            accessor: 'gender',
            type: 'select',
            required: true,
            options: [
              { label: 'Male', value: 'male' },
              { label: 'Female', value: 'female' },
              { label: 'Prefer Not To Say', value: 'preferNotToSay' },
              { label: 'Other', value: 'other' },
            ],
          }, {
            accessor: 'ageRange',
            required: true,
            type: 'select',
            options: [
              { value: '< 18' },
              { value: '18-34' },
              { value: '35-44' },
              { value: '45-54' },
              { value: '55-64' },
              { value: '65+' },
            ],
          }, {
            accessor: 'divider1',
            type: 'divider',
          }, {
            accessor: 'race',
            title: 'Race',
            variant: 'h6',
            type: 'checkbox-select',
            options: [
              { value: 'American Indian or Alaska Native' },
              { value: 'Asian' },
              { value: 'Black or African American' },
              { value: 'Native Hawaiin or Other Pacific Islander' },
              { value: 'White' },
            ],
          }, {
            accessor: 'divider2',
            type: 'divider',
          }, {
            accessor: 'hispancLatino',
            label: 'Are you of Hispanic or Latino origin?',
            type: 'checkbox',
          }, {
            accessor: 'divider3',
            type: 'divider',
          }, {
            accessor: 'allowLocation',
            type: 'checkbox',
          },
        ]}
        value={user}
        Footer={({ value, validate, form, setForm }) => {
          function save() {
            const { hasError, validatedSchema } = validate(form, value);
            setForm(validatedSchema);

            if (!hasError) {
              setUser(value);

              push('/loading?redirect=/assessment');
            }
          }

          return (
            <Box display="flex" justifyContent="flex-end">
              <Button color="primary" onClick={save} variant="contained">Next</Button>
            </Box>
          );
        }}
      />
    </Page>
  )
}

export default Register;
