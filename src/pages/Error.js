import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import img from '../assets/images/not-found.svg';

const Error = () => {
  //   return (
  //     <div>
  //       <img src={img} alt="not found" />
  //       <h3>Ohh! Page Not Found</h3>
  //       <p>We can't seem to find the page you're looking for</p>
  //       <Link to="/">Back home</Link>
  //     </div>
  //   );

  return (
    <Wrapper>
      <h4>404</h4>
      <p>This page could not be found.</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  /* flex-direction: row; */
  h4 {
    padding: 0.5rem;
    display: inline-block;
    border-right: 1px solid #777;
    padding-right: 0.5rem;
  }
  p {
    margin-top: 0;
    display: inline-block;
  }
`;

export default Error;
