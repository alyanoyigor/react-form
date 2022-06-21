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
    const isAllDirty = fieldValues.every((field) => field.isDirty);
    const isAllError = !fieldValues.every((field) => field.error === false);

    this.setState({
      ...this.state,
      isError: isAllError,
      isDirty: isAllDirty,
    });
  };

  onChange = (value, inputName) => {
    const { fields } = this.state;
    const { password, passwordConfirm } = fields;
    let passwordConfirmError = false;
    let error;

    if (inputName === 'passwordConfirm') {
      error = fields[inputName].validator(value, password.value);
    } else {
      error = fields[inputName].validator(value);
    }

    if (inputName === 'password') {
      const { validator, value: passwordConfirmValue } = passwordConfirm;
      passwordConfirmError = validator(value, passwordConfirmValue);
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
          [inputName]: { ...fields[inputName], value, error, isDirty: true },
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
    const { fields, isError, isDirty } = this.state;

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
          <Button type="submit" disabled={isError || !isDirty}>
            Submit
          </Button>
        </div>
      </form>
    );
  }
}
