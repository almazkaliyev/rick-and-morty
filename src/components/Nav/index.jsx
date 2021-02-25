import { NavLink } from 'react-router-dom';

import styles from './Nav.module.scss';

const Nav = () => (
  <ul className={styles.nav}>
    <li className={styles.navItem}>
      <NavLink
        activeClassName={styles.navLinkActive}
        className={styles.navLink}
        exact
        to="/"
      >
        Characters
      </NavLink>
    </li>
    <li className={styles.navItem}>
      <NavLink
        activeClassName={styles.navLinkActive}
        className={styles.navLink}
        to="/location"
      >
        Locations
      </NavLink>
    </li>
  </ul>
);

export default Nav;
