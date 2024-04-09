import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors';
import { IoMdExit } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoPersonSharp } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import { modalToggle } from '../../redux/logoutModal/slice.js'
import { useState } from 'react';
import css from './Header.module.css';
import clsx from 'clsx';

export default function Header() {
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
  const navMenu = clsx(css.navMenu, isMobileMenuActive && css.active);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  
  const handleLogOut = () => {
    dispatch(modalToggle());
  }

  const handleToggleMobileMenu = () => {
    setIsMobileMenuActive(!isMobileMenuActive);
  }

  return (
    <header className={css.header}>
      <div>
        <NavLink className={css.headerTitle} to='/'>Phonebook</NavLink>
        <button className={css.burger} onClick={handleToggleMobileMenu} type='button'><GiHamburgerMenu/></button>
        <div className={navMenu}>
          <button className={css.closeMobileMenu} onClick={handleToggleMobileMenu}><IoIosClose/></button>
          {isLoggedIn ?
            <div className={css.headerNav}>
              <NavLink className={css.navLink} onClick={handleToggleMobileMenu} to='/'>Home</NavLink>
              <NavLink className={css.navLink} onClick={handleToggleMobileMenu} to='/contacts'>Contacts</NavLink>
              <div className={css.headerUser}>
                <p>{user.name}</p>
                <button className={css.exit} onClick={handleLogOut}><IoMdExit/></button>
              </div>
              <div className={css.headerMobileUser}>
                <p className={css.username}><IoPersonSharp/> {user.name}</p>
                <button className={css.exit} onClick={() => { handleLogOut(); handleToggleMobileMenu();}}><IoMdExit/> Log out</button>
              </div>
            </div>:
            <>
              <div className={css.loginNav}>
                <NavLink className={css.navLink} to='/login'>Login</NavLink>
                <NavLink className={css.navLink} to='/registration'>Registration</NavLink>
              </div>
              <div className={css.loginMobileNav}>
                <NavLink className={css.navLink} onClick={handleToggleMobileMenu} to='/registration'>Registration</NavLink>
                <NavLink className={css.navLink} onClick={handleToggleMobileMenu} to='/login'>Login</NavLink>
              </div>
            </>
          }
        </div>
      </div>
    </header>
  )
}