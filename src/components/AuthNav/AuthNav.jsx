import { mobileMenuToggle } from "../../redux/mobileMenu/slice";
import { useDispatch } from 'react-redux';
import { NavLink } from "react-router-dom";
import css from './AuthNav.module.css';


export default function AuthNav() {
  const dispatch = useDispatch();
  
  const handleToggleMobileMenu = () => {
    dispatch(mobileMenuToggle())
  }

  return (
    <>
      <div className={css.authNav}>
        <NavLink className={css.authLink} to='/login'>Login</NavLink>
        <NavLink className={css.authLink} to='/register'>Registration</NavLink>
      </div>
      <div className={css.authMobileNav}>
        <NavLink className={css.authLink} onClick={handleToggleMobileMenu} to='/register'>Registration</NavLink>
        <NavLink className={css.authLink} onClick={handleToggleMobileMenu} to='/login'>Login</NavLink>
      </div>
    </>
    )
}