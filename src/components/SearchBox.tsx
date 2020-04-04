import React from 'react';

import { useIntl, FormattedMessage } from 'react-intl';

import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Hidden from '@material-ui/core/Hidden';

const SearchBox = (props: any) => {
  const intl = useIntl();
  const { onSearch, onLocationSelected, value, locations, location } = props;
  return (
    <Grid container spacing={1} alignItems="center">   
      <Hidden xsDown>
        <Grid item sm={6}>
          <TextField
            fullWidth
            variant="outlined" 
            value={value}
            onChange={event => onSearch(event.currentTarget.value)}
            placeholder={intl.formatMessage({ id: 'app.components.searchBox.search' })}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Hidden>
      <Grid item xs={12} sm={6}>
        <Autocomplete
          value={location}
          options={locations}
          onChange={(event, item) => onLocationSelected(item)}
          renderInput={(params) => 
            <TextField {...params} 
              fullWidth 
              label={<FormattedMessage id="app.components.searchBox.where" />}
              variant="outlined" 
          />}
        />
      </Grid>


    </Grid>

  )
}

export default SearchBox;