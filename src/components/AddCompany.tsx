import { makeStyles } from '@material-ui/core/styles';

import { useIntl, FormattedMessage } from 'react-intl';

import Paper from "@material-ui/core/Paper";
import Typography from '@material-ui/core/Typography';

import FormControlLabel from "@material-ui/core/FormControlLabel";

import Checkbox from '@material-ui/core/Checkbox';
import TextField from "@material-ui/core/TextField";
import InputAdornment from '@material-ui/core/InputAdornment';

import PhoneIcon from '@material-ui/icons/Phone';
import PinIcon from '@material-ui/icons/Room';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));


const AddCompany = () => {
  const classes = useStyles();
  const intl = useIntl();
  return (
    <Paper className={classes.root}>
      <Grid container spacing={3} alignItems="center">
          <Grid item xs={12}>
            <TextField
              fullWidth
              placeholder={intl.formatMessage({id: 'app.components.addCompany.name'})}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              placeholder={intl.formatMessage({id: 'app.components.addCompany.address'})}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PinIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              placeholder={intl.formatMessage({id: 'app.components.addCompany.phone'})}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              placeholder={intl.formatMessage({id: 'app.components.addCompany.email'})}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={true}
                  name="checkedB"
                  color="primary"
                />
              }
              label={<FormattedMessage id="app.components.addCompany.localShippingAvailable" />}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography>
              <FormattedMessage id="app.components.addCompany.addMoreUsefulInfo" />
            </Typography>
            <TextField
              fullWidth
              multiline
              rows="10"
            />
          </Grid>
      </Grid>
    </Paper>
  );
}

export default AddCompany;