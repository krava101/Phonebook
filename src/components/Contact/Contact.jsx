import { useDispatch } from 'react-redux';
import { useState } from 'react';
import css from './Contact.module.css';
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoIosClose } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { deleteContact, toggleToFavContact } from '../../redux/contactsOps.js';
import clsx from 'clsx';


function Contact({ contact }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modal = clsx(css.modal, isModalOpen && css.active)
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(contact.id))
  };
  const handleFavorite = () => {
    const contactId = contact.id;
    const favorite = !contact.favorite;
    dispatch(toggleToFavContact({contactId, favorite}))
  };

  return (
    <>
      <div className={css.contactInfo}>
        <p>{contact.name}</p>
        <p>{contact.number}</p>
      </div>
      <a className={css.contactBtn} href={'tel:' + contact.number}><FaPhone/></a>
      <button className={css.openModalBtn} type='button' onClick={()=>setIsModalOpen(true)}><HiOutlineDotsHorizontal/></button>
      
        <div className={modal} onClick={() => setIsModalOpen(false)}>
          <button type='button' className={css.closeModalBtn}><IoIosClose/></button>
          <button type='button' onClick={handleDelete}>Delete contact</button>
          <button type='button' onClick={handleFavorite}>{contact.favorite ? 'Remove favorite' : 'Add to favorite'}</button>
        </div>
    </>
  )
}

export default Contact;