import { mobileMenuToggle } from "../../redux/mobileMenu/slice";
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import css from './AuthNav.module.css';


export default function AuthNav() {
  const dispatch = useDispatch();
  
  const handleToggleMobileMenu = () => {
    dispatch(mobileMenuToggle())
  }

  return (
    <>
      <div className={css.authNav}>
        <Link className={css.authLink} to='/login'>Login</Link>
        <Link className={css.authLink} to='/registration'>Registration</Link>
      </div>
      <div className={css.authMobileNav}>
        <Link className={css.authLink} onClick={handleToggleMobileMenu} to='/registration'>Registration</Link>
        <Link className={css.authLink} onClick={handleToggleMobileMenu} to='/login'>Login</Link>
      </div>
    </>
    )
}