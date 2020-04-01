/**
 * Some helper functions for form validation
 */

import { isValidNumberForRegion } from 'libphonenumber-js'

export const isRequired = (value: any) => (value ? undefined : 'Required');


// based on https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
export const isEmail = (value: any) => {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return value && re.test(value) ? undefined : 'Not valid email';
};

export const isPhoneNumber = (value: any) => {
  // TODO for now use only IT
  return value && isValidNumberForRegion(value, 'IT') ? undefined : 'Not valid phone';
}