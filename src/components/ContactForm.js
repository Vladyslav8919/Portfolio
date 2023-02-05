import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styled from 'styled-components';

const ContactForm = () => {
  const [state, handleSubmit] = useForm('xayzqrzj');
  if (state.succeeded) {
    return (
      <p>
        Thanks! <br /> I'll contact you as soon as possible
      </p>
    );
  }
  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="First and/or Last"
        />
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="email@domain.com"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="" rows="3" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />{' '}
        <br />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  align-items: center;

  form {
    font-size: 14px;
  }
  label {
    display: block;
  }

  input {
    border: 1px solid #ccc;
    /* border-radius: 3px; */
    padding: 0.5rem;
    margin-bottom: 1.35rem;
  }
  textarea {
    width: 100%;
    /* resize: none; */
    border: 1px solid #ccc;
    /* border-radius: px; */
    margin-bottom: 1.35rem;
  }
  button {
    background-color: #fff;
    border: 1px solid #ccc;
    padding: 0.5rem 1rem;
    /* font-weight: 500; */
  }
`;

export default ContactForm;
