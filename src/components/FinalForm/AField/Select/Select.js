import React from 'react';
import { ErrorMessage } from '../../../ErrorMessage';
import scss from '../AField.module.scss';

export class Select extends React.Component {
  render() {
    const { id, name, options, input, meta } = this.props;
    const { touched, error } = meta;

    return (
      <>
        <select
          className={`${scss.field} ${
            touched && error ? scss['field-error'] : ''
          }`}
          name={name}
          id={id}
          {...input}
        >
          {options.map(({ value, title }) => (
            <option key={value} value={value}>
              {title}
            </option>
          ))}
        </select>
        {touched && error && (
          <ErrorMessage className={scss.error}>{error}</ErrorMessage>
        )}
      </>
    );
  }
}
