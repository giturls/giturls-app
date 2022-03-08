import Url from "../models/Url";

const validate = val => {
  const errors = {};
  if (val.httpUrl) {
    const url = new Url(val.httpUrl);
    errors.http = 'Not falid'
    console.log('First Name is required');
    errors.firstName = 'Required';
  }
  if (val.sshUrl) {
    console.log('Last Name is required');
    errors.lastName = 'Required';
  }
  return errors;
};
