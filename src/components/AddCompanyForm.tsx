import { useIntl, FormattedMessage } from 'react-intl';

import { Form, Field } from 'react-final-form';

import { isEmail, isRequired, isPhoneNumber } from '../lib/forms';

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

const AddCompanyForm = (props: any) => {
  const { onSubmit } = props;
  const intl = useIntl();
  return (
    <Form
      onSubmit={onSubmit}
      
      render={({ handleSubmit }) => (
        <form id="addCompanyForm" onSubmit={handleSubmit}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12}>
              <Field
                name="name"
                validate={isRequired}
                render={({ input, meta }) => (
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
                    error={meta.error && meta.touched}
                    {...input}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                name="address"
                validate={isRequired}
                render={({ input, meta }) => (
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
                    error={meta.error && meta.touched}
                    {...input}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                name="phone"
                validate={isPhoneNumber}
                render={({ input, meta }) => (
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
                    error={meta.error && meta.touched}
                    {...input}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                name="email"
                validate={isEmail}
                render={({ input, meta }) => (
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
                    error={meta.error && meta.touched}
                    {...input}
                  />
                  )}
                />
            </Grid>
            <Grid item xs={12}>
              <Field
                name="isLocalDeliveryAvailable"
                render={({ input }) => (
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={input.value === true}
                        color="primary"
                        onChange={input.onChange}
                      />
                    }
                    label={<FormattedMessage id="app.components.addCompany.localShippingAvailable" />}
                  />
              )}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>
                <FormattedMessage id="app.components.addCompany.addMoreUsefulInfo" />
              </Typography>
              <Field
                name="notes"
                validate={isRequired}
                render={({ input, meta }) => (
                  <TextField
                    fullWidth
                    multiline
                    rows="10"
                    error={meta.error && meta.touched}
                    {...input}
                  />
                  )}
                />
            </Grid>
          </Grid>
        </form>
      )}
    />
  );
}

export default AddCompanyForm;