import React from 'react';
import { Button } from '../Button/Button';
import { Input } from './Input';
import scss from './Form.module.scss';

export class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {
        name: {
          title: 'Name',
          type: 'text',
          name: 'name',
          value: '',
          error: false,
          placeholder: 'Input your name..',
          validator: (value = '') => {
            return value.length >= 2 ? false : 'Name is too short';
          },
        },
        email: {
          title: 'Email',
          type: 'email',
          name: 'email',
          value: '',
          error: false,
          placeholder: 'Input your email..',
          validator: (value = '') => {
            return value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
              ? false
              : 'Email is invalid';
          },
        },
        password: {
          title: 'Password',
          type: 'password',
          name: 'password',
          autoComplete: 'false',
          value: '',
          error: false,
          placeholder: 'Input your password..',
          validator: (value = '') => {
            return value.match(
              /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g
            )
              ? false
              : 'Password is too simple';
          },
        },
        passwordConfirm: {
          title: 'Password confirm',
          type: 'password',
          name: 'passwordConfirm',
          autoComplete: 'false',
          value: '',
          error: false,
          placeholder: 'Confirm your password..',
          validator: (value = '', compareValue) => {
            return value === compareValue ? false : "Passwords don't match";
          },
        },
      },
      isError: null,
    };
  }

  handleChange(value, inputName) {
    this.setState((prevState) => ({
      ...prevState,
      fields: {
        ...prevState.fields,
        [inputName]: { ...prevState.fields[inputName], value },
      },
    }));
  }

  validateInput(value, inputName) {
    const error = this.state.fields[inputName].validator(
      value,
      this.state.fields.password.value
    );
    this.setState(
      (prevState) => ({
        ...prevState,
        fields: {
          ...prevState.fields,
          [inputName]: {
            ...prevState.fields[inputName],
            error,
          },
        },
      }),
      this.disableSubmitButton.bind(this)
    );
  }

  async validateAllInputs() {
    Object.keys(this.state.fields).forEach((field) => {
      const { value, name } = this.state.fields[field];
      this.validateInput(value, name);
    });
  }

  disableSubmitButton() {
    const isDisabled = Object.keys(this.state.fields).every(
      (field) => this.state.fields[field].error === false
    );
    this.setState((prevState) => ({ ...prevState, isError: !isDisabled }));
  }

  async handleSubmitForm(event) {
    event.preventDefault();
    await this.validateAllInputs();
    if (!this.state.isError) {
      console.log('send form data');
      this.resetForm();
    }
  }

  resetForm() {
    Object.keys(this.state.fields).forEach((field) => {
      this.setState((prevState) => ({
        ...prevState,
        fields: {
          ...prevState.fields,
          [field]: { ...prevState.fields[field], value: '' },
        },
      }));
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmitForm.bind(this)}>
        {Object.keys(this.state.fields).map((field) => {
          const { title, error, autoComplete, type, placeholder, name, value } =
            this.state.fields[field];
          return (
            <Input
              key={name}
              title={title}
              error={error}
              type={type}
              placeholder={placeholder}
              name={name}
              value={value}
              autoComplete={autoComplete}
              handleChange={this.handleChange.bind(this)}
              validateInput={this.validateInput.bind(this)}
            />
          );
        })}
        <div className={scss['form-buttons']}>
          <Button onClick={this.resetForm.bind(this)}>Reset</Button>
          <Button type="submit" disabled={this.state.isError}>
            Submit
          </Button>
        </div>
      </form>
    );
  }
}
