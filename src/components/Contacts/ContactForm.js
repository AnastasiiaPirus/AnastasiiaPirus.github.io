// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import "./ContactForm.css";

function ContactForm() {
  const [state, handleSubmit] = useForm("mbjelyno");
  if (state.succeeded) {
    return <p>Thanks for contacting!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className='form' id="contacts">
      {/* <label htmlFor="full-name">Full Name</label> */}
      <input 
      type="text" 
      name="name" 
      id="full-name" 
      placeholder="Name" 
      required />
      <ValidationError
        prefix="Name"
        field="name"
        errors={state.errors}
        className="fieldErrors"
      />
      {/* <label htmlFor="email">
        Email Address
      </label> */}
      <input
        id="email"
        type="email"
        name="email"
        placeholder='Email'
        required
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
        className="fieldErrors"
      />
      <textarea
        id="message"
        name="message"
        placeholder='Your message'
        required
      />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
        className="fieldErrors"
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
      <ValidationError className="formErrors" errors={state.errors} />
    </form>
  );
}
function FormApp() {
  return (
    <ContactForm />
  );
}
export default FormApp;