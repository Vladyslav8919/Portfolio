import SocialLinks from '../components/SocialLinks';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { BsGithub, BsLinkedin, BsTelegram, BsInstagram } from 'react-icons/bs';
import { FaViber } from 'react-icons/fa';
import { RiMailFill } from 'react-icons/ri';
import { SiUpwork, SiFiverr, SiGmail } from 'react-icons/si';
import styled from 'styled-components';
import logo from '../assets/images/logo.svg';
import ContactForm from '../components/ContactForm';

const Contacts = () => {
  useDocumentTitle('Contacts');
  return (
    <Wrapper>
      <ul>
        <li>
          <a
            href="https://github.com/Vladyslav8919"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub />
             GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/%D0%B2%D0%BB%D0%B0%D0%B4%D0%B8%D1%81%D0%BB%D0%B0%D0%B2-%D0%BF%D1%88%D0%B5%D0%B2%D0%BB%D0%BE%D1%86%D1%8C%D0%BA%D0%B8%D0%B9-b722a6255/?originalSubdomain=ua"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
             LinkedIn
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
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=vladyslav.pshevlotskyi@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <SiGmail />
             Email
          </a>
        </li>
        <li>
          <a href="https://t.me/vladyslav8919" target="_blank" rel="noreferrer">
            <BsTelegram />
             Telegram
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/vladyslav8919?igshid=ZmZhODViOGI="
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram />
             Instagram
          </a>
        </li>

        <li>
          <a
            href="https://www.upwork.com/freelancers/~01c418e3d80a35c46c"
            target="_blank"
            rel="noreferrer"
          >
            <SiUpwork />
             UpWork
          </a>
        </li>
        {/* <li>
          <a
            href="https://www.upwork.com/freelancers/~01c418e3d80a35c46c"
            target="_blank"
            rel="noreferrer"
          >
            <SiFiverr />
             Fiverr
          </a>
        </li> */}
      </ul>
      <ContactForm />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 3.5rem 0;
  display: flex;
  justify-content: space-around;
  ul {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem 5rem;
    /* flex-direction: column; */

    li a {
      display: flex;
      max-width: fit-content;
      align-items: center;
      color: #939196;
      letter-spacing: 0.25px;
      transition: all 0.3s;

      &:hover {
        color: #626868;
      }
    }
  }
`;

export default Contacts;
