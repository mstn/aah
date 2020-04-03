import React from 'react';

import { FormattedMessage } from 'react-intl';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from "@material-ui/core/Paper";
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import CloseIcon from '@material-ui/icons/Close';

import { makeStyles } from '@material-ui/core/styles';

import AddCompanyForm from "./AddCompanyForm";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
  title: {
    flexGrow: 1,
  },
  toolbar: {
    paddingRight: 24,
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
}));


const AddCompanyPage = (props: any) => {
  const { onClose } = props;
  const classes = useStyles();

  // TODO display errors
  return (
    <React.Fragment>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={onClose} aria-label="close">
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <FormattedMessage id="app.pages.add.title" />
          </Typography>
          <Button 
            color="inherit"
            onClick={() => {
            // XXX not very React-y!
            // based on https://codesandbox.io/s/1y7noyrlmq
            document
              .getElementById('addCompanyForm')
              .dispatchEvent(new Event('submit', { cancelable: true }))
          }}>
            <FormattedMessage id="app.pages.add.save" />
          </Button>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Paper className={classes.root}>
          <AddCompanyForm
            onSubmit={
              (company: any) => {
                // TODO add your logic here
                console.log(company);
                alert('Saved!');
              }
            } 
          />
        </Paper>
      </main>
    </React.Fragment>


  );

}


export default AddCompanyPage;