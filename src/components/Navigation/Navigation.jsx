import { mobileMenuToggle } from "../../redux/mobileMenu/slice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import css from './Navigation.module.css';


export default function Navigation() {
  const dispatch = useDispatch();
  const handleToggleMobileMenu = () => {
    dispatch(mobileMenuToggle())
  }

  return (
    <>
      <Link className={css.navLink} onClick={handleToggleMobileMenu} to='/contacts'>Contacts</Link>
      <Link className={css.navLink} onClick={handleToggleMobileMenu} to='/'>Home</Link>
    </>
  )
}