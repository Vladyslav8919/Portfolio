import { NavLink } from 'react-router-dom';
import { BsGithub, BsLinkedin, BsTelegram } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import styled from 'styled-components';

const SocialLinks = () => {
  return (
    <Wrapper>
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
      <li>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=vladyslav.pshevlotskyi@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <SiGmail />
        </a>
      </li>
      <li>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=vladyslav.pshevlotskyi@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <BsTelegram />
        </a>
      </li>
      {/* <li>
        <a
          href="mailto:vladyslav.pshevlotskyi@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          Email me
        </a>
      </li> */}
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  display: flex;
  gap: 1.5rem;
  margin-left: 0.5rem;

  li a {
    color: #999;
  }
`;
export default SocialLinks;
