import React from 'react';

import { useIntl } from 'react-intl';

import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';

const SearchBox = (props: any) => {
  const intl = useIntl();
  const { onSearch, value } = props;
  return (
    <TextField
      fullWidth
      value={value}
      onChange={event => onSearch(event.currentTarget.value)}
      placeholder={intl.formatMessage({ id: 'app.pages.home.typeYourAddress' })}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  )
}

export default SearchBox;