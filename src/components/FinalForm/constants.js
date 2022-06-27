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
      id: 'name-input',
      placeholder: 'Input your name..',
      validators: [validateRequired, validateName],
    },
    email: {
      title: 'Email',
      type: 'email',
      name: 'email',
      id: 'email-input',
      placeholder: 'Input your email..',
      validators: [validateEmail],
    },
    password: {
      title: 'Password',
      type: 'password',
      name: 'password',
      id: 'password-input',
      autoComplete: 'false',
      placeholder: 'Input your password..',
      validators: [validateRequired, validatePassword],
    },
    passwordConfirm: {
      title: 'Password confirm',
      type: 'password',
      name: 'passwordConfirm',
      id: 'passwordConfirm-input',
      autoComplete: 'false',
      placeholder: 'Confirm your password..',
      validators: [validateRequired, validateConfirmPassword],
    },
    select: {
      name: 'pets',
      title: 'Choose a pet:',
      options: [
        { value: '', title: 'Please choose an option' },
        { value: 'dog', title: 'Dog' },
        { value: 'cat', title: 'Cat' },
        { value: 'hamster', title: 'Hamster' },
        { value: 'parrot', title: 'Parrot' },
        { value: 'spider', title: 'Spider' },
        { value: 'other', title: 'Other' },
      ],
      id: 'pet-select',
      validators: [validateRequired],
    },
  },
};
