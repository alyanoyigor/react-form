import React from 'react';
import { Form as FinalForm } from 'react-final-form';
import { initialFormState } from '../../state';
import { Button } from '../Button/Button';
import { Input } from './Input';
import scss from './Form.module.scss';

export class Form extends React.Component {
  handleSubmit = (values) => {
    console.log(values);
  };

  render() {
    const { fields } = initialFormState;

    return (
      <FinalForm onSubmit={this.handleSubmit}>
        {({ handleSubmit, pristine, form }) => (
          <form onSubmit={handleSubmit} onReset={form.reset}>
            {Object.entries(fields).map(([fieldKey, fieldValue]) => {
              const {
                title,
                validator,
                autoComplete,
                type,
                placeholder,
                name,
              } = fieldValue;

              return (
                <Input
                  key={fieldKey}
                  validator={validator}
                  title={title}
                  type={type}
                  placeholder={placeholder}
                  name={name}
                  autoComplete={autoComplete}
                  handleChange={this.onChange}
                />
              );
            })}
            <div className={scss['form-buttons']}>
              <Button type="reset">Reset</Button>
              <Button type="submit" disabled={pristine}>
                Submit
              </Button>
            </div>
          </form>
        )}
      </FinalForm>
    );
  }
}
