import styled from 'styled-components';
import { VscCloudDownload } from 'react-icons/vsc';
import { NavLink } from 'react-router-dom';
import resume from '../assets/docs/Resume.pdf';

const Sidebar = () => {
  let activeStyle = {
    // color: '#888',
    fontWeight: '500',
  };

  return (
    <Wrapper>
      <ul>
        <li>
          <NavLink
            className="nav-link"
            to="about"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-link"
            to="projects"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-link"
            to="certificates"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Certificates
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-link"
            to="contacts"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Contacts
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-link"
            to="guestbook"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Guestbook
          </NavLink>
        </li>
        <li>
          <a className="nav-link" href={resume} download="Resume.pdf">
            Resume 
            <VscCloudDownload className="icon" />
          </a>
        </li>
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  /* background-color: orange; */
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
  margin-top: 1rem;
  margin-left: -0.5rem;
  margin-right: 2rem;
  /* margin: 0 1rem; */
  @media (min-width: 768px) {
    flex-shrink: 0;
  }

  ul {
    display: flex;
    gap: 1rem;
  }
  li {
    display: flex;
    align-items: center;
  }
  button {
    background-color: transparent;
    border: none;
  }
  /* .btn--download-resume {
    display: flex;
    align-items: center;
    color: #bbb;
    transition: all 0.3s ease-in-out;
  }
  .btn--download-resume:hover {
    color: #777;
    cursor: pointer;
  } */

  .nav-link {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    /* margin-bottom: 0.5rem; */
    font-size: 14px;
    color: #bbb;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    border-radius: 20px;
  }

  .nav-link:hover {
    color: #777;
    cursor: pointer;
    /* text-decoration: underline; */
    box-shadow: inset 100px 0 0 0 #f7f7f7;
  }

  .icon {
    font-size: 1.1rem;
  }
`;

export default Sidebar;
