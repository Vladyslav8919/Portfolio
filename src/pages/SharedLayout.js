import { Link, Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import SocialLinks from '../components/SocialLinks';

const SharedLayout = () => {
  const location = useLocation();
  // console.log(location.pathname);
  return (
    <Wrapper>
      <Sidebar />
      <Outlet />
      {location.pathname !== '/' ? (
        <div className="footer">
          <Link to="/" className="back-home">
            Back to home
          </Link>
          <SocialLinks />
        </div>
      ) : (
          <SocialLinks />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.main`
  padding-bottom: 2rem;
  .back-home {
    font-size: 14px;
    /* margin-left: 0.5rem; */
    /* padding-bottom: 2rem; */
    color: #ddd;
    transition: all 0.3s;

    &:hover {
      color: #ccc;
    }
  }

  li {
    margin-left: 0.75rem;
  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export default SharedLayout;
