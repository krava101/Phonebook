import { useSelector, useDispatch } from "react-redux";
import { mobileMenuToggle } from '../../redux/mobileMenu/slice.js';
import { IoPersonSharp } from "react-icons/io5";
import { modalToggle } from '../../redux/logoutModal/slice.js';
import { selectUser } from '../../redux/auth/selectors.js';
import { IoMdExit } from "react-icons/io";
import css from './UserMenu.module.css';
import Navigation from "../Navigation/Navigation.jsx";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  
  const handleToggleMobileMenu = () => {
    dispatch(mobileMenuToggle())
  }

  const handleLogOut = () => {
    dispatch(modalToggle());
  }

  return (
    <div className={css.userMenu}>
      <Navigation/>
      <div className={css.headerUser}>
        <p>{user.name}</p>
        <button className={css.logoutBtn} onClick={handleLogOut}><IoMdExit/></button>
      </div>
      <div className={css.headerMobileUser}>
        <p className={css.username}><IoPersonSharp/> {user.name}</p>
        <button className={css.logoutBtn} onClick={() => { handleLogOut(); handleToggleMobileMenu();}}><IoMdExit/> Log out</button>
      </div>
    </div>  
  )
}