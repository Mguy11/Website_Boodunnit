import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import logo from '../images/icons/studio_koprol_logo.png'

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: false }

    this.handleClick = this.handleClick.bind(this);
  }

  state = {
    sticky: window.pageYOffset > 80,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleWindowScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleWindowScroll);
  }

  handleWindowScroll = (event) => {
    const { sticky } = this.state;
    const shouldBeSticky = window.pageYOffset >= 10;

    if (sticky && !shouldBeSticky) {
      this.setState({
        sticky: false
      })
    }

    if (!sticky && shouldBeSticky) {
      this.setState({
        sticky: true
      })
    }
  }

  showsettings = (event) => {
    event.preventDefault();
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !this.state.isToggleOn
    }));
  }

  render() {

    const cx = classNames({
      nav: true,
      'nav--sticky': this.state.sticky
    })
    return (
      <nav className={cx}>
        <ul className="nav__items">
          <li className="nav__item">
            <NavLink
              to="/"
              className="nav__link-text"
            >Home</NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              to="/videos-art"
              activeClassName="nav__link-text--active"
              className="nav__link-text"
            >Video's & Art
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              to="/faq"
              activeClassName="nav__link-text--active"
              className="nav__link-text"
            >FAQ</NavLink>
          </li>
          <div className="nav__logo" style={{ backgroundImage: `url(${logo})` }} alt="studio-koprol-logo"></div>
          <li className="nav__item">
            <NavLink
              to="/about"
              activeClassName="nav__link-text--active"
              className="nav__link-text"
            >About Us</NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              to="/gallery"
              activeClassName="nav__link-text--active"
              className="nav__link-text"
            >Gallery</NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              to="/privacy"
              activeClassName="nav__link-text--active"
              className="nav__link-text"
            >Privacy</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}