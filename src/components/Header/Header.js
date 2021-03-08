import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { LogoWrapper } from './styles';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="relative">
      <Toolbar>
        <LogoWrapper>
          <Link to="/people-list">
            <CameraIcon className={classes.icon} />
            <Typography variant="h6" color="inherit" noWrap>
              Swapi People
            </Typography>
          </Link>
        </LogoWrapper>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
