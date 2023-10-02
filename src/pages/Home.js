import styled from 'styled-components';
import mainImg from '../assets/images/main-img.webp';

const Home = () => {
  return (
    <Wrapper>
      <div className="container">
        <h1>Vladyslav Pshevlotskyi</h1>
    <div className="content">
    <img src={mainImg} alt="logo" className="main-img" />
        <p>
          Hello, I'm Vladyslav Pshevlotskyi, a versatile professional with a diverse background in various roles, including Frontend Trainee, Translator for a leading EdTech company in Ukraine, Sales Manager for imported cars, and Manager at a local store.
        </p>
        <p>
          Proficient in JavaScript, HTML, CSS, and React, with a solid foundation in SEO, my portfolio showcases the breadth of my experience and skills.
        </p>
    </div>
      </div>
    </Wrapper>
  );
};
export default Home;

const Wrapper = styled.main`
  flex: flex-auto;
  /* background: white; */
  display: flex;
  padding: 0 0.5rem;
  /* border-bottom: 1px solid #eee; */

  h1 {
    font-weight: 700;
    transition: all 0.3s;
  }

  p {
    text-align: justify;
  }

  img {
    float: left;
    max-width: 32%;
    margin-right: 2rem;
  }

  q {
    font-style: italic;
    /* font-weight: 500; */
  }

  .content {
  display: flex;
  }

  .skill {
    box-shadow: inset 100px 0 0 0 #f7f7f7;
    border-radius: 20px;
    padding: 0.35rem;
  }
`;
