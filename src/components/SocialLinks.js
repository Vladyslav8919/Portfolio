import { NavLink } from 'react-router-dom';
import { BsGithub, BsLinkedin, BsTelegram, BsEnvelope } from 'react-icons/bs';
import { RiMailSendLine } from 'react-icons/ri';
import styled from 'styled-components';

const SocialLinks = () => {
  return (
    <Wrapper>
      <button
        className="email-me"
        onClick={(e) => {
          window.location.href = 'mailto:vladyslav.pshevlotskyi@gmail.com';
          e.preventDefault();
        }}
      >
        Email me
      </button>
      <span>|</span>
      <ul>
        <li>
          <a
            href="https://github.com/Vladyslav8919"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/%D0%B2%D0%BB%D0%B0%D0%B4%D0%B8%D1%81%D0%BB%D0%B0%D0%B2-%D0%BF%D1%88%D0%B5%D0%B2%D0%BB%D0%BE%D1%86%D1%8C%D0%BA%D0%B8%D0%B9-b722a6255/?originalSubdomain=ua"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>
        </li>
        {/* <li>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=vladyslav.pshevlotskyi@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <RiMailSendLine />
          </a>
        </li> */}
        <li>
          <a href="https://t.me/vladyslav8919" target="_blank" rel="noreferrer">
            <BsTelegram />
          </a>
        </li>
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  margin-right: 0.5rem;

  ul {
    display: flex;
    /* align-items: center; */
    justify-content: end;
    gap: 0.35rem;
    /* margin-left: 0rem; */
  }

  li a {
    display: flex;
    /* align-items: center; */
    color: #ddd;
    transition: all 0.3s;

    &:hover {
      color: #ccc;
    }
  }

  span {
    color: #ddd;
    font-size: 14px;
  }

  .email-me {
    cursor: pointer;
    color: #ddd;
    font-size: 14px;
    transition: all 0.3s;
    background-color: transparent;
    border: none;
    letter-spacing: 1px;

    &:hover {
      color: #bbb;
    }
  }
`;
export default SocialLinks;
