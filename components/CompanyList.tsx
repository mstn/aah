
import React from 'react';

import Link from 'next/link';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import StorefrontIcon from '@material-ui/icons/Storefront';
import StoreIcon from '@material-ui/icons/Store';
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';
import PetsIcon from '@material-ui/icons/Pets';

export default function CompanyList() {

  return (
    <List>
      <Link href="/companies/1" passHref>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <StorefrontIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Conad Market" secondary="via Roma 53" />
        </ListItem>
      </Link>
      <Link href="/companies/2" passHref>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <StoreIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Panettiere" secondary="via dei Mille 32" />
        </ListItem>
      </Link>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <StoreIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Azienda agricola le Due Vacche" secondary="via dei campi 123" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <StoreIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Coop Market" secondary="via Roma 53" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <LocalFloristIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Fioraio" secondary="via Roma 53" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PetsIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="La casa degli animali" secondary="via Roma 53" />
      </ListItem>
    </List>
  );
}