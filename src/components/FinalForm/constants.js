import {
  validateConfirmPassword,
  validateEmail,
  validateName,
  validatePassword,
  validateRequired,
} from './utils';

export const initialFormState = {
  fields: {
    name: {
      title: 'Name',
      type: 'text',
      name: 'name',
      placeholder: 'Input your name..',
      validators: [validateRequired, validateName],
    },
    email: {
      title: 'Email',
      type: 'email',
      name: 'email',
      placeholder: 'Input your email..',
      validators: [validateEmail],
    },
    password: {
      title: 'Password',
      type: 'password',
      name: 'password',
      autoComplete: 'false',
      placeholder: 'Input your password..',
      validators: [validateRequired, validatePassword],
    },
    passwordConfirm: {
      title: 'Password confirm',
      type: 'password',
      name: 'passwordConfirm',
      autoComplete: 'false',
      placeholder: 'Confirm your password..',
      validators: [validateRequired, validateConfirmPassword],
    },
  },
};
