import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

import StorefrontIcon from '@material-ui/icons/Storefront';
import FlagIcon from '@material-ui/icons/Flag';

import Contacts from './Contacts';

const useStyles = makeStyles(() => ({
  root: {},
  report: {
    marginLeft: 'auto',
  },
}));

export default function Company(props: any) {
  const classes = useStyles();

  const { name, address, notes } = props;

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <StorefrontIcon />
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
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={classes.report}
          aria-label="flag"
        >
          <FlagIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}