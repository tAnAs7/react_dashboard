import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { versionRoutes } from '../../pages/version/route';

class ReleaseNavigationBar extends React.Component {
  static propTypes = {
    current: PropTypes.string
  };

  static versionRoutes = versionRoutes;

  render() {
    const { current } = this.props;
    return (
      <nav>
        <ul>
          {ReleaseNavigationBar.versionRoutes.map(({ version, label, pathDefault }) => (
            <li key={version}>
              {current === version ? label : <Link to={`${version}${pathDefault}`}>{label}</Link>}
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default ReleaseNavigationBar;