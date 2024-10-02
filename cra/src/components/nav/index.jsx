import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NavigationBar = ({ current }) => {
  const { t } = useTranslation();

  const navItems = [
    { to: "/", label: "home_page" },
    { to: "/login", label: "login_page" },
    { to: "/release", label: "release_page" },
    { to: "/contact", label: "contact_page" },
    { to: "/about", label: "about_page" }
  ];

  return (
    <nav>
      <ul>
        {navItems.map(({ to, label }) => (
          <li key={to}>
            {current === to ? t(`${label}`) : <Link to={to}>{t(`${label}`)}</Link>}
          </li>
        ))}
      </ul>
    </nav>
  );
};

NavigationBar.propTypes = {
  current: PropTypes.string
};

export default NavigationBar;