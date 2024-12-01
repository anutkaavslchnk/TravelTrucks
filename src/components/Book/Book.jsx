import * as Yup from "yup";
import { Field, Form, Formik } from 'formik';
import s from './Book.module.css';
import { useId } from "react";
import { ErrorMessage } from "formik";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast, { Toaster } from "react-hot-toast";

const Book = () => {

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
    email: Yup.string().email("Must be a valid email!").required("Required"),
    calendar: Yup.date().required("Required").nullable(),
    comment: Yup.string().oneOf(["good", "neutral", "bad"])
  });

  const initialValues = {
    name: "",
    email: "",
    calendar: "",
    comment: ""
  };
  const nameFieldId = useId();
  const emailFieldId = useId();
  const calFieldId = useId();
  const levelFieldId = useId();
  const handleSubmit = (values, actions) => {
    console.log(values);
    toast.success('Successfully send!');
    actions.resetForm();
  };
  
  return (
    <div className={s.cont}>
      <Toaster></Toaster>
      <div className={s.content}>
        <h2 className={s.title}>Book your campervan now</h2>
        <p className={s.par}>Stay connected! We are always ready to help you.</p>

        <Formik initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={FeedbackSchema} >
          <Form className={s.form}>
            <Field className={s.fields} type='text' name='name' placeholder="Name*" id={nameFieldId}></Field>
            <ErrorMessage name="name" component="span" />
            <Field className={s.fields} type='email' name='email' placeholder="Email*" id={emailFieldId}></Field>
            <ErrorMessage name="email" component="span" />
            <Field name="calendar">
  {({ field, form }) => (
    <ReactDatePicker
      {...field}
      selected={field.value ? new Date(field.value) : null}
      onChange={(date) => form.setFieldValue(field.name, date)}
      dateFormat="yyyy/MM/dd"
      placeholderText="Select a booking date"
      className={`${s.fields} ${s.custom_calendar__input}`} 
       calendarClassName="custom-calendar"
    />
  )}
</Field>
            <ErrorMessage name="calendar" component="span" />
            <Field className={s.fields} type='textarea' name='comment' placeholder="Comment" rows="200" cols="200" id={levelFieldId}></Field>
            <button className={s.btn} type='submit'>Send</button>
      
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Book;
