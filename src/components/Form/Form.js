import React from 'react';
import { Button } from '../Button/Button';
import { Input } from './Input';
import { initialFormState } from '../../state';
import scss from './Form.module.scss';

export class Form extends React.Component {
  state = {
    ...initialFormState,
  };

  handleDisable = () => {
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

  onChange = (value, inputName) => {
    const { fields } = this.state;
    const { validator } = fields[inputName];
    const { password, passwordConfirm } = fields;
    let passwordConfirmError = false;
    let error;

    if (inputName === 'passwordConfirm') {
      error = validator(value, password.value);
    } else {
      error = validator(value);
    }

    if (inputName === 'password') {
      const {
        validator: confirmPasswordValidator,
        value: passwordConfirmValue,
      } = passwordConfirm;

      passwordConfirmError = confirmPasswordValidator(
        value,
        passwordConfirmValue
      );
    }

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
      this.handleDisable
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
        <div className={scss['form-buttons']}>
          <Button type="reset">Reset</Button>
          <Button type="submit" disabled={isError || !isTouched}>
            Submit
          </Button>
        </div>
      </form>
    );
  }
}
