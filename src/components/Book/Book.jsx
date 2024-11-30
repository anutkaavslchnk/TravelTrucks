
import { Field, Form, Formik } from 'formik';
import s from './Book.module.css';
const Book = () => {
  return (
    <div className={s.cont}>
      <div className={s.content}>
      <h2 className={s.title}>Book your campervan now</h2>
        <p className={s.par}>Stay connected! We are always ready to help you.</p>

        <Formik >
       <Form className={s.form}>
        <Field className={s.fields} type='text' name='name' placeholder="Name*"></Field>
        <Field className={s.fields} type='email' name='email' placeholder="Email*"></Field>
        <Field className={s.fields} placeholder="Booking date*"></Field>
        <Field className={s.fields} type='textarea' name='comment' placeholder="Comment"  rows="4"
            cols="50"></Field>
 <button className={s.btn} type='submit'>Send</button>
          
       </Form>
       
        </Formik>
        
       
      </div>
       
    </div>
  )
};

export default Book;
