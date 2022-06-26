import React from 'react';
import { NavLink } from 'react-router-dom';
import scss from './Header.module.scss';

export class Header extends React.Component {
  setNavLinkClassName = ({ isActive }) =>
    `${scss['nav-link']} ${isActive ? scss.active : ''}`;

  render() {
    return (
      <header className={scss.header}>
        <nav className={scss.nav}>
          <NavLink className={this.setNavLinkClassName} to="/form">
            Form
          </NavLink>
          <NavLink className={this.setNavLinkClassName} to="/final-form">
            Final Form
          </NavLink>
        </nav>
      </header>
    );
  }
}
