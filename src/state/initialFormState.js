import {
  validateConfirmPassword,
  validateEmail,
  validateName,
  validatePassword,
} from '../utils';

export const initialFormState = {
  fields: {
    name: {
      title: 'Name',
      type: 'text',
      name: 'name',
      placeholder: 'Input your name..',
      validator: validateName,
    },
    email: {
      title: 'Email',
      type: 'email',
      name: 'email',
      placeholder: 'Input your email..',
      validator: validateEmail,
    },
    password: {
      title: 'Password',
      type: 'password',
      name: 'password',
      autoComplete: 'false',
      placeholder: 'Input your password..',
      validator: validatePassword,
    },
    passwordConfirm: {
      title: 'Password confirm',
      type: 'password',
      name: 'passwordConfirm',
      autoComplete: 'false',
      placeholder: 'Confirm your password..',
      validator: validateConfirmPassword,
    },
  },
};
