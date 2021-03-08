import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import PeopleCard from './PeopleCard';
import {
  AutoCompleteWrapper,
} from './styles';

import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getListPeople, searchPeople } from '../../actions/peopleActions';
import { getCountValueFromUrl } from '../../helpers/urlsFunc';

const style = { width: 300 };

export const List = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    peopleList, loading, searchListPeople,
  } = useSelector(state => state.people);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(getListPeople());
  }, [dispatch]);

  const changeSearchField = (event) => {
    const { value } = event.target;
    dispatch(searchPeople(value));
  };

  const clearField = (event, value, reason) => {
    if (reason === 'clear') {
      dispatch(searchPeople(''));
      return;
    }

    if (reason === 'select-option') {
      const count = getCountValueFromUrl(value.url, 'http://swapi.dev/api/people/');
      history.push(`/people/${count}`);
    }
  };

  const closeAutocomplete = (event, reason) => {
    if (reason !== 'select-option') {
      dispatch(searchPeople(''));
    }
    setOpen(false);
  };

  return (
    <>
      <AutoCompleteWrapper>
        <Autocomplete
          id="autocomplete"
          style={style}
          open={open}
          onOpen={() => {
            setOpen(true);
          }}
          onClose={closeAutocomplete}
          getOptionSelected={(option, value) => option.name === value.name}
          getOptionLabel={(option) => option.name}
          options={searchListPeople}
          loading={loading}
          clearOnBlur
          onChange={clearField}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search people"
              variant="outlined"
              onChange={changeSearchField}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <React.Fragment>
                    {loading ? <CircularProgress color="inherit" size={20} /> : null}
                    {params.InputProps.endAdornment}
                  </React.Fragment>
                ),
              }}
            />
          )}
        />
      </AutoCompleteWrapper>
      <Grid container spacing={4}>
        {
          peopleList.map((people, index) => (
            <Grid
              item
              key={`${people + index}`}
              xs={12} sm={6} md={4}
            >
              <PeopleCard data={people} />
            </Grid>
          ))
        }
      </Grid>
    </>
  );
};
