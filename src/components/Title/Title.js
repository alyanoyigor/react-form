import React from 'react';
import PropTypes from 'prop-types';
import scss from './Title.module.scss';

export class Title extends React.Component {
  render() {
    const { children } = this.props;
    return <h1 className={scss.title}>{children}</h1>;
  }
}

Title.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    .isRequired,
};
