import { Link, Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import SocialLinks from '../components/SocialLinks';
import { BsGithub } from 'react-icons/bs';

const SharedLayout = () => {
  const location = useLocation();
  // console.log(location.pathname);
  return (
    <Wrapper>
      <Sidebar />
      <Outlet />
      {location.pathname !== '/' ? (
        <Link to="/" className="back-home">
          Back to home
        </Link>
      ) : null}
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .back-home {
    font-size: 14px;
    margin-left: 0.5rem;
    color: #999;
  }
`;

export default SharedLayout;
