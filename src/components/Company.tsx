import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Chip from '@material-ui/core/Chip';

import CompanyIcon from './CompanyIcon';

import Contacts from './Contacts';
import { FormattedMessage } from 'react-intl';

const useStyles = makeStyles(() => ({
  root: {},
}));

export default function Company(props: any) {
  const classes = useStyles();

  const { company, onToggleFavorite, isFavorite } = props;
  const { name, address, notes, deliveryPlaces } = company;

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
        <Typography variant="body2" color="textSecondary" component="h4">
          <FormattedMessage id="app.components.company.deliversTo" />
        </Typography>
        <Typography variant="body2" color="textSecondary" component="div">
          {deliveryPlaces.map( (place, index) => <Chip
            variant="outlined" 
            size="small"
            key={index}
            label={place}
          />)}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="div">
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