import React from 'react';
import { ErrorMessage } from '../../../ErrorMessage';
import { selectErrorStyles, StyledSelect } from './styled';

export class Select extends React.Component {
  render() {
    const { id, name, options, input, meta } = this.props;
    const { touched, error } = meta;

    return (
      <>
        <StyledSelect
          touched={touched}
          error={error}
          name={name}
          id={id}
          {...input}
        >
          {options.map(({ value, title }) => (
            <option key={value} value={value}>
              {title}
            </option>
          ))}
        </StyledSelect>
        {touched && error && (
          <ErrorMessage styles={selectErrorStyles}>{error}</ErrorMessage>
        )}
      </>
    );
  }
}
