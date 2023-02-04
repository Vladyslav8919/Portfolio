import styled from 'styled-components';
import { VscCloudDownload } from 'react-icons/vsc';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  let activeStyle = {
    color: '#888',
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
        <li className="resume nav-link">
          Resume 
          <VscCloudDownload className="icon" />
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
  margin-right: 2rem;
  /* margin: 0 1rem; */
  @media (min-width: 768px) {
    flex-shrink: 0;
  }

  ul {
    display: flex;
    gap: 2rem;
  }
  li {
    display: flex;
    align-items: center;
  }

  .nav-link {
    padding: 0.5rem;
    /* margin-bottom: 0.5rem; */
    font-size: 14px;
    color: #bbb;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
  }

  .nav-link:hover {
    color: #777;
    cursor: pointer;
    /* text-decoration: underline; */
    box-shadow: inset 100px 0 0 0 #f7f7f7;
    border-radius: 20px;
  }

  .icon {
    font-size: 1.1rem;
  }
`;

export default Sidebar;
