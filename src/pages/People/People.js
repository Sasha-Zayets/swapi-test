import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import IconButton from '@material-ui/core/IconButton';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { createStyles, makeStyles } from '@material-ui/core';
import { Label } from './styles';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getFullInfoPeople, setSelectPeople, addLikePeople } from '../../actions/peopleActions';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(0.5),
      },
    },
  }),
);

export const People = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const { id } = useParams();
  const { selectPeople } = useSelector(state => state.people);

  useEffect(() => {
    dispatch(getFullInfoPeople(id));

    return () => {
      dispatch(setSelectPeople({}));
    };
  }, [dispatch, id]);

  const likePeople = () => {
    dispatch(addLikePeople(selectPeople));
  };

  return (
    <Grid container spacing={4}>
      <Grid item xl={6} md={6}>
        <Typography variant="h3" component="h3" gutterBottom>
          { selectPeople.name }
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Films:
        </Typography>
        <Box className={classes.root} mb={3}>
          {
            selectPeople.filmsTitles?.map((item, index) => (
              <Chip
                key={`${item + index}`}
                label={item}
              />
            ))
          }
        </Box>
        <Typography variant="subtitle1" gutterBottom>
          Vehicles:
        </Typography>
        <Box mb={3}>
          {
            selectPeople.vehiclesData?.map((item, index) => (
              <Typography
                key={`${item.name + index}`}
                variant="subtitle1"
                gutterBottom
              >
                <Label>Name: </Label>
                { item.name }
                <Label>{ ' | ' }</Label>
                <Label>Model: </Label>
                { item.model }
              </Typography>
            ))
          }
        </Box>
        <Box>
          <IconButton onClick={likePeople}>
            <ThumbUpAltIcon color={selectPeople.isLiked ? 'primary' : 'action'} />
          </IconButton>
          <IconButton>
            <ThumbDownIcon />
          </IconButton>
        </Box>
      </Grid>
      <Grid item xl={6} md={6}>
        <Typography variant="subtitle1" gutterBottom>
          <Label>
            Home world:
          </Label>
          { selectPeople.homeWorld?.name }
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          <Label>
            Height:
          </Label>
          { selectPeople.height }
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          <Label>
            Mass:
          </Label>
          { selectPeople.mass }
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          <Label>
            Hair color:
          </Label>
          { selectPeople.hair_color }
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          <Label>
            Skin color:
          </Label>
          { selectPeople.skin_color }
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          <Label>
            Eye color:
          </Label>
          { selectPeople.eye_color }
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          <Label>
            Birth year:
          </Label>
          { selectPeople.birth_year }
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          <Label>
            Gender:
          </Label>
          { selectPeople.gender }
        </Typography>
      </Grid>
    </Grid>
  );
};
