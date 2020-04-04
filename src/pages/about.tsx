import React from 'react';

import { FormattedMessage } from 'react-intl';
import { Typography } from '@material-ui/core';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import GitHubIcon from '@material-ui/icons/GitHub';
import CopyrightIcon from '@material-ui/icons/Copyright';
import StoreIcon from '@material-ui/icons/Store';
import EmailIcon from '@material-ui/icons/Email';

function About() {
  return (
    <React.Fragment>
      <h1><FormattedMessage id="app.pages.about.title" /></h1>
      <Typography>
        <FormattedMessage id="app.pages.about.mission" />
      </Typography>
      <List>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <GitHubIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText>
          <Typography>
            Il codice sorgente è disponibile <a href="https://github.com/mstn/aah">qui</a> con licenza aGPL.
          </Typography>
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <CopyrightIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText 
        >
          <Typography>
            I dati usati da questa app <a href="https://consegnointrentino.provincia.tn.it/Open-Data">sono rilasciati</a>
            {' '} con licenza <a href="https://creativecommons.org/licenses/by/4.0/deed.it">CC-BY</a> 
            {' '}dalla Provincia Autonoma di Trento che ne è il titolare.
            <br/> Questo progetto non è affiliato con la Provincia Autonoma di Trento che ha già una <a href="https://consegnointrentino.provincia.tn.it">piattaforma</a>
            {' '} per navigare lo stesso dataset.
          </Typography>
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <StoreIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText>
          <Typography>
            Sei un esercente? Aggiungi la tua attività attraverso il <a href="https://consegnointrentino.provincia.tn.it//accreditation/form/983">modulo</a> fornito dalla Provincia.
            <br/> Non operi in Provincia di Trento? <a href="https://github.com/mstn/aah">Scarica</a> il codice sorgente di questa app e adattalo alla tua realtà! Ti basta solo un elenco di esercenti in formato json.
          </Typography>
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <EmailIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText>
          <Typography>
            Per dubbi e domande scrivi a <a href="mailto:mstn@posteo.org">mstn@posteo.org</a>.
          </Typography>
        </ListItemText>
      </ListItem>
    </List>
    </React.Fragment>
  )
}

export default About