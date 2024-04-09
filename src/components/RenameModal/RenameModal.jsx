import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from 'react-redux';
import { useId } from "react";
import * as Yup from "yup";
import { renameContact } from "../../redux/contacts/operations";
import { IoMdClose } from "react-icons/io";
import css from './RenameModal.module.css';


const ValidationSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too short!').max(16, 'Too long! Only 16 symbols!').required('This is required!'),
  number: Yup.string().min(3, 'Too short!').max(20, 'Too long!').required('This is required!')
});

export default function RenameModal({contact, handleClose}) {
  const nameId = useId();
  const telId = useId();
  const dispatch = useDispatch();
  const initialValues = {
    name: contact.name,
    number: contact.number
  }

  const handleSubmit = (newContact, actions) => {
    dispatch(renameContact({ id: contact.id, newContact }));
    handleClose();
    actions.resetForm();
  }
  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={ValidationSchema}>
        <Form className={css.form}>
          <button className={css.closeModalBtn} onClick={handleClose} type="button"><IoMdClose/></button>
          <div>
            <Field type="text" name="name" id={nameId} placeholder='Name' autoFocus/>
            <span className={css.error}><ErrorMessage name="name" as="span" /></span>
            <Field type="tel" name="number" id={telId} placeholder='Phone'/>
            <span className={css.error}><ErrorMessage name="number" as="span" /></span>
          </div>
          <button className={css.saveBtn} type="submit">Save</button>
        </Form>
      </Formik>
    </>
  )
}