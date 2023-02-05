import styled from 'styled-components';
import useDocumentTitle from '../hooks/useDocumentTitle';

const Guestbook = () => {
  useDocumentTitle('Guestbook');

  const handleSubmit = () => {};

  return (
    <Wrapper>
      <article>
        <h4>Hello, dear guest!</h4>
        <p>Would you like to leave something in this guestbook?</p>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              type="text"
              name="firstName"
              placeholder="John"
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              type="text"
              name="lastName"
              placeholder="Doe"
            />
          </div>
          <div>
            <label htmlFor="company">
              Position and Company <span>(optionally)</span>
            </label>
            <input id="company" type="text" name="company" placeholder="Meta" />
          </div>
          <div>
            <label htmlFor="email">
              Email Address <span>(optionally)</span>
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="email@domain.com"
            />
          </div>
          <div className="message">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </article>
      <article>
        <div className="info">
          <h4>John Doe</h4>
          <div className="details">
            <p className="company">HR Manager at Meta</p>
            <p className="email">johndoe@mail.com</p>
          </div>
        </div>

        <p>Hi! Nice portfolio</p>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  form {
    font-size: 14px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    align-items: flex-start;
  }
  label {
    display: block;
  }

  input {
    border: 1px solid #ccc;
    /* border-radius: 3px; */
    padding: 0.5rem;
    width: 100%;
    height: 2rem;
    /* margin-bottom: 1.35rem; */
  }

  .message {
    align-self: flex-end;
  }
  textarea {
    width: 100%;
    /* resize: none; */
    border: 1px solid #ccc;
    /* border-radius: px; */
    /* margin-bottom: 1.35rem; */
    height: 2rem;
  }
  button {
    height: 2rem;
    background-color: #fff;
    border: 1px solid #ccc;
    padding: 0.5rem 0.75rem;
    align-self: flex-end;
    margin-bottom: 0.45rem;
    font-weight: 500;
  }

  span {
    color: #ccc;
  }

  article {
    margin: 2rem 0;
    box-shadow: rgba(149, 157, 165, 0.15) 0px 8px 24px;
    padding: 2rem 2.5rem;
    border-radius: 3px;

    h4 {
      /* margin-bottom: 0; */
    }
  }

  .info {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .company,
  .email {
    font-size: 14px;
    margin: 0;
    color: #bbb;
  }
`;

export default Guestbook;
