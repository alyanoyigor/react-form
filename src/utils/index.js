const validateRequired = (value) => {
  return value.length > 0 ? false : 'This field is required';
};

export const validateName = (value = '') => {
  const isValid = value.length >= 2 ? false : 'Name is too short';

  return validateRequired(value) || isValid;
};

export const validateEmail = (value = '') => {
  if (!value.length) {
    return false;
  }

  return value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
    ? false
    : 'Email is invalid';
};

export const validatePassword = (value = '') => {
  const isValid = value.match(
    /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g
  )
    ? false
    : 'Password is too simple';

  return validateRequired(value) || isValid;
};

export const validateConfirmPassword = (value = '', allValues) => {
  const isValid =
    value === allValues.password ? false : "Passwords don't match";

  return validateRequired(value) || isValid;
};
