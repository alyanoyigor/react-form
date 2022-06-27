import React from 'react';
import { Button } from '../Button/Button';
import { Input } from './Input';
import { initialFormState } from './constants';
import { StyledFormButtons } from './styled';

export class Form extends React.Component {
  state = {
    ...initialFormState,
  };

  updateFormError = () => {
    const { fields } = this.state;
    const fieldValues = Object.values(fields);
    const isAllTouched = fieldValues.every(({ touched, required }) =>
      required ? touched : true
    );
    const isError = fieldValues.some(({ error }) => error);

    this.setState({
      ...this.state,
      isError,
      isTouched: isAllTouched,
    });
  };

  validatePassword = (value) => {
    const { fields } = this.state;
    const { validator, value: passwordConfirmValue } = fields.passwordConfirm;

    return validator(value, passwordConfirmValue);
  };

  validateInput = (value, inputName) => {
    const { fields } = this.state;
    const error = fields[inputName].validator(value, fields.password.value);
    let passwordConfirmError = false;

    if (inputName === 'password') {
      passwordConfirmError = this.validatePassword(value);
    }

    return { error, passwordConfirmError };
  };

  onChange = (value, inputName) => {
    const { fields } = this.state;
    const { error, passwordConfirmError } = this.validateInput(
      value,
      inputName
    );

    this.setState(
      {
        ...this.state,
        fields: {
          ...fields,
          passwordConfirm: {
            ...fields.passwordConfirm,
            error: passwordConfirmError,
          },
          [inputName]: { ...fields[inputName], value, error, touched: true },
        },
      },
      this.updateFormError
    );
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { fields } = this.state;
    const values = Object.entries(fields).map(([fieldKey, fieldValue]) => {
      return { [fieldKey]: fieldValue.value };
    });
    console.log(values);

    this.handleReset();
  };

  handleReset = () => {
    this.setState({ ...initialFormState });
  };

  render() {
    const { fields, isError, isTouched } = this.state;

    return (
      <form onSubmit={this.handleSubmit} onReset={this.handleReset}>
        {Object.entries(fields).map(([fieldKey, fieldValue]) => {
          const { title, error, autoComplete, type, placeholder, name, value } =
            fieldValue;
          return (
            <Input
              key={fieldKey}
              title={title}
              error={error}
              type={type}
              placeholder={placeholder}
              name={name}
              value={value}
              autoComplete={autoComplete}
              handleChange={this.onChange}
            />
          );
        })}
        <StyledFormButtons>
          <Button type="reset">Reset</Button>
          <Button type="submit" disabled={isError || !isTouched}>
            Submit
          </Button>
        </StyledFormButtons>
      </form>
    );
  }
}
