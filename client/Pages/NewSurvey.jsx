import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Box,
  Button,
  Divider,
  Typography,
} from '@material-ui/core';
import moment from 'moment';
import Form from '../Form';
import Page from './Page';
import { useGlobalState } from '../hooks';

function NewSurvey() {
  const { push } = useHistory();
  const [surveys, setSurveys] = useGlobalState('surveys', []);
  const [newSurvey, setNewSurvey] = useState({
    conditions: '',
    otherCondistions: '',
    symptoms: '',
    otherSymptoms: '',
    taveled: null,
    contact: null,
    fever: null,
    firstResponder: null,
    breathRate: '',
    heartRate: '',
  });

  return (
    <Page key="newSurvey">
      <Box my={1}>
        <Typography variant="h5">Take Survey</Typography>
      </Box>
      <Divider />
      <Box p={1} />
      <Form
        form={[
          {
            title: '1. Do you have any pre-existing health conditions? (Select all that apply).',
            accessor: 'conditions',
            type: 'checkbox-select',
            options: [
              { value: 'asthma' },
              { value: 'cancer' },
              { value: 'chronicBronchitis' },
              { value: 'diabitis' },
              { value: 'heartDisease' },
              { value: 'hypertension' },
              { value: 'none' },
            ],
          }, {
            accessor: 'otherCondistions',
            label: 'Other',
            title: '2. Are you currently experiencing any of these symptoms? (Select all that apply).',
            accessor: 'symptoms',
            type: 'checkbox-select',
            options: [
              { value: 'bluishLipsOrFace' },
              { value: 'brainFog' },
              { value: 'cough' },
              { value: 'diarrhea' },
              { value: 'difficultyBreathing' },
              { value: 'fever' },
              { value: 'persistentChestPain' },
              { value: 'soreThroat' },
              { value: 'turedness' },
              { value: 'none' },
            ],
          }, {
            accessor: 'otherSymptoms',
            label: 'Other',
          },
          {
            accessor: 'taveled',
            title: '3. Have you recently traveled to an area with known loacal spread of COVID-19',
            options: [{ value: 'Yes' }, { value: 'No' }],
            type: 'radio',
          },
          {
            accessor: 'contact',
            title: '4. Have you come into close cantact (within 6ft) of someone who has a laboratory confirmed COVID-19 diagnosis in the past 14 days?',
            options: [{ value: 'Yes' }, { value: 'No' }],
            type: 'radio',
          },
          {
            accessor: 'fever',
            title: '5. Do you have a fever of greater than 100.4 OR symptoms of lower repiratory illness such as cough, shortness of breath, difficulty breathing, or sore throat?',
            options: [{ value: 'Yes' }, { value: 'No' }],
            type: 'radio',
          },
          {
            accessor: 'firstResponder',
            title: '6. Are you a first responsed, healthcare worder, or employee or attendee of a child or adult care facility?',
            options: [{ value: 'Yes' }, { value: 'No' }],
            type: 'radio',
          },
          {
            accessor: 'breathRate',
            title: '7. What is your breathing rate per minute?',
          },
          {
            accessor: 'heartRate',
            title: '8. What is your resting heart rate?',
          },
        ]}
        value={newSurvey}
        Footer={({ value, validate, form, setForm }) => {
          function save() {
            const { hasError, validatedSchema } = validate(form, value);
            setForm(validatedSchema);

            if (!hasError) {
              setSurveys([...surveys, { data: value, date: moment().format("MMMM Do, h:mma")}]);

              push('/loading?redirect=/survey&title=Saving');
            }
          }

          return (
            <Box display="flex" justifyContent="flex-end">
              <Button color="primary" onClick={save} variant="contained">Submit</Button>
            </Box>
          );
        }}
      />
    </Page>
  )
}

export default NewSurvey;
