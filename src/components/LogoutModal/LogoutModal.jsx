import { selectIsLogoutModalOpen } from '../../redux/logoutModal/selectors';
import { IoPersonSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { modalToggle } from '../../redux/logoutModal/slice';
import { IoIosClose } from "react-icons/io";
import { selectUser } from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/operations';
import Modal from 'react-modal';
import css from './LogoutModal.module.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    borderRadius: '8px',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#a03aff',
    zIndex: 999,
  },
};

export default function LogoutModal() {
  const modalIsOpen = useSelector(selectIsLogoutModalOpen);
  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    dispatch(modalToggle());
  }

  const handleCloseModal = () => {
    dispatch(modalToggle());
  }

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        contentLabel="Logout Modal"
      >
        <div className={css.modal}>
          <button className={css.closeModalBtn} type='button' onClick={handleCloseModal}><IoIosClose/></button>
          <p>Do you want to log out of your account?</p>
          <p className={css.username}><IoPersonSharp />{user.name}</p>
          <div className={css.controls}>
            <button className={css.controlsBtn} type='button' onClick={handleLogout}>Log out</button>
            <button className={css.controlsBtn} type='button' onClick={handleCloseModal}>Stay signed in</button>
          </div>
        </div>
      </Modal>
    </>
  )
}