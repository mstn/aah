import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';

import CompanyIcon from './CompanyIcon';

import Contacts from './Contacts';

const useStyles = makeStyles(() => ({
  root: {},
}));

export default function Company(props: any) {
  const classes = useStyles();

  const { company, onToggleFavorite, isFavorite } = props;
  const { name, address, notes } = company;

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <CompanyIcon {...company} />
        }
        title={name}
        subheader={address}
      />
      <CardContent>
        <Contacts {...props }/>
        <Typography variant="body2" color="textSecondary" component="p">
          {notes}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton onClick={onToggleFavorite} aria-label="add to favorites">
          <FavoriteIcon color={ isFavorite ? 'error' : 'disabled' }/>
        </IconButton>
      </CardActions>
    </Card>
  );
}