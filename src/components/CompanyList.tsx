
import React from 'react';

import Link from 'next/link';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import CompanyIcon from './CompanyIcon';

export default function CompanyList(props: any) {
  const { data, loading } = props;

  if (loading) {
    return <span>Loading...</span>
  }

  if (data.length === 0) {
    return <span>No items</span>
  }

  return (
    <React.Fragment>
      <List>
        {data.map( company => (
          <Link 
            key={company.id} 
            href={`/companies/${company.id}`} 
            as={`${process.env.ASSET_PREFIX}/companies/${company.id}`}
            passHref>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <CompanyIcon {...company} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={company.name} secondary={company.address} />
            </ListItem>
          </Link>
        ))}
      </List>
    </React.Fragment>
  );
}
