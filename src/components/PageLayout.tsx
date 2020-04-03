import React from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';

import { makeStyles } from '@material-ui/core/styles';
import { useIntl } from 'react-intl';

import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Dialog from '@material-ui/core/Dialog';

import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';

import Link from 'next/link';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FavoriteIcon from '@material-ui/icons/Favorite';

import AddCompanyPage from './AddCompanyPage';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  bottom: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
  toolbar: {},
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
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function PageLayout({ children }: any) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const intl = useIntl();
  const router = useRouter()

  const selectedTab = router.pathname === '/about' ? 2 : router.pathname === '/favorites' ? 1 : 0;

  return (
    <div className={classes.root}>
      <Head>
        <title>Covid App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <CssBaseline />
      <AppBar position="absolute" className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <Link href="/" passHref>
              <IconButton aria-label="back" color="inherit">
                  <HomeIcon />
              </IconButton>
            </Link>
            <Typography align="center" component="h1" variant="h6" color="inherit" noWrap  className={classes.title}>
              Covid
            </Typography>
            {process.env.showAddCompanyForm &&
              <IconButton onClick={() => setOpen(true)} aria-label="add" color="inherit">
                  <AddIcon />
              </IconButton>
            }
          </Toolbar>
      </AppBar>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          {children}
        </Container>

      </main>

      <BottomNavigation
        showLabels
        value={selectedTab}
        className={classes.bottom}
      >
        <BottomNavigationAction 
          label={intl.formatMessage({id: 'app.components.nav.home'})} 
          icon={
            <Link href="/" passHref>
              <HomeIcon/>
            </Link>
          } 
        />
        <BottomNavigationAction 
          label={intl.formatMessage({id: 'app.components.nav.fav'})} 
          icon={
            <Link href="/favorites" passHref>
              <FavoriteIcon/>
            </Link>
          } 
        />
        <BottomNavigationAction 
          label={intl.formatMessage({id: 'app.components.nav.about'})} 
          icon={
            <Link href="/about" passHref>
              <InfoIcon/>
            </Link>
          } 
        />
        
      </BottomNavigation>

      {process.env.showAddCompanyForm && <Dialog fullScreen open={open} onClose={() => setOpen(false)} >
        <AddCompanyPage onClose={() => setOpen(false)}/>
      </Dialog>}
    </div>
  )
}