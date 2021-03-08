import React, { useMemo } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';
import { getCountValueFromUrl } from '../../helpers/urlsFunc';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardContent: {
    flexGrow: 1,
  },
  label: {
    fontWeight: 'bold',
  },
}));


const PeopleCard = ({ data }) => {
  const classes = useStyles();
  const idPeople = useMemo(() => getCountValueFromUrl(data.url, 'http://swapi.dev/api/people/'), [data]);

  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h2">
          { data.name }
        </Typography>
        <Typography>
          <span className={classes.label}>Gender: </span>
          { ' ' }
          { data.gender }
        </Typography>
      </CardContent>
      <CardActions>
        <Button component={Link} to={`/people/${idPeople}`} size="small" color="primary">
          View
        </Button>
      </CardActions>
    </Card>
  );
};

export default PeopleCard;
