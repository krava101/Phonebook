import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoIosClose } from "react-icons/io";
import { useState } from 'react';
import { FaPhone } from "react-icons/fa6";
import RenameModal from '../RenameModal/RenameModal.jsx';
import DeleteModal from '../DeleteModal/DeleteModal.jsx';
import clsx from 'clsx';
import css from './Contact.module.css';


function Contact({ contact }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRenameModalOpen, setIsRenameModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const modal = clsx(css.modal, isModalOpen && css.active)

  const handleOpenRenameModal = () => {
    setIsRenameModalOpen(true);
    setIsModalOpen(false);
  }

  const handleCloseRenameModal = () => {
    setIsRenameModalOpen(false);
  }

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
  }

  return (
    <>
      <div className={css.contactInfo}>
        <p>{contact.name}</p>
        <p>{contact.number}</p>
      </div>
      <a className={css.contactBtn} href={'tel:' + contact.number}><FaPhone/></a>
      <button className={css.openModalBtn} type='button' onClick={()=>setIsModalOpen(true)}><HiOutlineDotsHorizontal/></button>
      
      <div className={modal}>
        <button type='button' className={css.closeModalBtn} onClick={()=>setIsModalOpen(false)}><IoIosClose/></button>
        <button type='button' onClick={() => setIsDeleteModalOpen(true)}>Delete contact</button>
        <button type='button' onClick={handleOpenRenameModal}>Rename</button>
        {isDeleteModalOpen && <DeleteModal contact={contact} handleClose={handleCloseDeleteModal}/>}
      </div>
      {isRenameModalOpen && <RenameModal contact={contact} handleClose={handleCloseRenameModal}/>}
    </>
  )
}

export default Contact;