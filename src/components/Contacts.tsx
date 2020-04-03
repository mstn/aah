import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { FormattedMessage } from 'react-intl';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function Contacts(props: any) {
  const classes = useStyles();

  const { company: { phone, email, isLocalShippingAvailable } } = props;

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      <ListItem button>
        <ListItemIcon>
          <PhoneIcon />
        </ListItemIcon>
        <ListItemText primary={phone} />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <EmailIcon />
        </ListItemIcon>
        <ListItemText primary={email} />
      </ListItem>
      {isLocalShippingAvailable && <ListItem button>
        <ListItemIcon>
          <LocalShippingIcon />
        </ListItemIcon>
        <ListItemText primary={<FormattedMessage id="app.pages.company.localShippingAvailable" />} />
      </ListItem>}
    </List>
  );
}