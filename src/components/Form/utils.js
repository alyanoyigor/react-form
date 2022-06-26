export const validateRequired = (value) => {
  return value ? undefined : 'This field is required';
};

export const validateName = (value) =>
  value.length >= 2 ? false : 'Name is too short';

export const validateEmail = (value) =>
  !value || value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
    ? false
    : 'Email is invalid';

export const validatePassword = (value) =>
  value.match(/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g)
    ? false
    : 'Password is too simple';

export const validateConfirmPassword = (value, allValues) =>
  value === allValues.password ? false : "Passwords don't match";

export const composeValidators =
  (...validators) =>
  (...values) =>
    validators.reduce(
      (error, validator) => error || validator(...values),
      undefined
    );
