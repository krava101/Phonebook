import { useSelector, useDispatch } from "react-redux";
import { selectIsMobileMenuOpen } from '../../redux/mobileMenu/selectors.js';
import { mobileMenuToggle } from '../../redux/mobileMenu/slice.js';
import { selectIsLoggedIn} from '../../redux/auth/selectors.js';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosClose } from "react-icons/io";
import { Link } from 'react-router-dom';
import UserMenu from '../UserMenu/UserMenu.jsx';
import AuthNav from "../AuthNav/AuthNav.jsx";
import clsx from 'clsx';
import css from './AppBar.module.css';

export default function Header() {
  const dispatch = useDispatch(mobileMenuToggle())
  const isMobileMenuOpen = useSelector(selectIsMobileMenuOpen);
  const navMenu = clsx(css.navMenu, isMobileMenuOpen && css.active);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  
  const handleToggleMobileMenu = () => {
    dispatch(mobileMenuToggle())
  }

  return (
    <header className={css.header}>
      <div className={css.container}>
        <Link className={css.headerTitle} to='/'>Phonebook</Link>
        <button className={css.burger} onClick={handleToggleMobileMenu} type='button'><GiHamburgerMenu/></button>
        <div className={navMenu}>
          <button className={css.closeMobileMenu} onClick={handleToggleMobileMenu}><IoIosClose/></button>
          {isLoggedIn ? <UserMenu/> : <AuthNav handleToogleMenu={handleToggleMobileMenu} />}
        </div>
      </div>
    </header>
  )
}