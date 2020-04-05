import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { FormattedMessage, useIntl } from 'react-intl';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';

const codec = require('nodejs-base64-encode');

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
  const intl = useIntl();

  const { company: { isLocalShippingAvailable } } = props;

  const hasEmail = !!props.company.email;
  const hasPhone = !!props.company.phone;

  // this should make harder for crawlers to find emails and phones
  const decodedEmail = codec.decode(props.company.email || '', 'base64');
  const decodedPhone = codec.decode(props.company.phone || '', 'base64');

  const [email, setEmail] = React.useState(`${decodedEmail.slice(0, 3)}${'X'.repeat(Math.max(3, decodedEmail.length-3))}`);
  const [phone, setPhone] = React.useState(`${decodedPhone.slice(0, 3)}${'X'.repeat(Math.max(3, decodedPhone.length-3))}`);

  const showEmail = () => setEmail(decodedEmail);
  const showPhone = () => setPhone(decodedPhone);

  const revealEmailMessage = email !== decodedEmail ? intl.formatMessage({id: "app.components.contact.clickToReveal"}) : ''
  const revealPhoneMessage = phone !== decodedPhone ? intl.formatMessage({id: "app.components.contact.clickToReveal"}) : ''

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      {hasPhone && <ListItem onClick={showPhone}>
        <ListItemIcon>
          <PhoneIcon />
        </ListItemIcon>
        <ListItemText primary={phone} secondary={revealPhoneMessage} />
      </ListItem>}
      {hasEmail && <ListItem onClick={showEmail}>
        <ListItemIcon>
          <EmailIcon />
        </ListItemIcon>
        <ListItemText primary={email} secondary={revealEmailMessage} />
      </ListItem>}
      {isLocalShippingAvailable && <ListItem>
        <ListItemIcon>
          <LocalShippingIcon />
        </ListItemIcon>
        <ListItemText primary={<FormattedMessage id="app.pages.company.localShippingAvailable" />} />
      </ListItem>}
    </List>
  );
}