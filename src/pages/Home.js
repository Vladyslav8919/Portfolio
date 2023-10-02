import styled from 'styled-components';
import mainImg from '../assets/images/main-img.jpg';

const Home = () => {
  return (
    <Wrapper>
      <div className="container">
        <h1>Vladyslav Pshevlotskyi</h1>
        <p>
          Hey, my name is Vladyslav and I'm a highly motivated and passionate
          developer (with a clear focus on React), who is eager to learn.
        </p>
        <img src={mainImg} alt="logo" className="main-img" />
        <p>
          <q>No doubt quality is costly but lack of quality is more costly</q>,
          – that is why, I primarily focus on writing clean, elegant, and
          efficient code.
        </p>
        <p>
          As a self-motivated developer, I'd like to work on new challenges and
          always try to learn new skills and new programming languages.
        </p>
        <p>
          I am seeking opportunities to create modern and unique websites and I
          will do my best to provide you with good results.
        </p>
        {/* <p>
          <strong>My scope of knowledge covers:</strong>  HTML, CSS, Sass,
          JavaScript, React, Redux, Redux Toolkit, Git, Babel, Parcel, Tailwind,
          Bulma, Firebase, Figma and many more soon.
        </p> */}
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
    max-width: 20%;
    margin-right: 2rem;
  }

  q {
    font-style: italic;
    /* font-weight: 500; */
  }

  .skill {
    box-shadow: inset 100px 0 0 0 #f7f7f7;
    border-radius: 20px;
    padding: 0.35rem;
  }
`;
