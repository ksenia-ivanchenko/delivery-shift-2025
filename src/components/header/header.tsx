import { NavLink, useNavigate } from 'react-router-dom';
import clsx from 'clsx';

import { resetUser, useDispatch, useSelector } from 'store';
import { BoxIcon, ExitIcon, HistoryIcon, ProfileIcon } from 'ui-kit';
import { deleteCookie } from 'cookies';
import styles from './header.module.scss';

export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { authorized } = useSelector((state) => state.user);

  const handleExit = () => {
    if (authorized) {
      dispatch(resetUser());
      deleteCookie('accessToken');
    } else {
      navigate('/auth');
    }
  };
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink
          to='/'
          className={({ isActive }) => clsx(styles.link, isActive && styles.linkActive)}
        >
          <BoxIcon width={35} />
          <span className={styles.logoText}>Шифт Delivery</span>
        </NavLink>
        <NavLink
          to='/profile'
          className={({ isActive }) => clsx(styles.link, isActive && styles.linkActive)}
        >
          <ProfileIcon />
          <span>Профиль</span>
        </NavLink>
        <NavLink
          to='/orders'
          className={({ isActive }) => clsx(styles.link, isActive && styles.linkActive)}
        >
          <HistoryIcon />
          <span>История</span>
        </NavLink>
      </nav>
      <button className={styles.exit} onClick={handleExit}>
        <ExitIcon />
        <span>{authorized ? 'Выйти' : 'Войти'}</span>
      </button>
    </header>
  );
};
