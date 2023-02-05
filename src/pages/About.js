import styled from 'styled-components';
import useDocumentTitle from '../hooks/useDocumentTitle';

const About = () => {
  useDocumentTitle('About');
  return (
    <Wrapper>
      <div>
        <h3>Experience</h3>
        <h5>Front-end developer (Intern) at CheapTrip, Remote</h5>
        <p className="date">January 2022 - Present</p>
        <ul>
          <li>Developing user-facing features, assisting with coding</li>
          <li>
            Testing, troubleshooting problems with performance and user
            experience
          </li>
          <li>
            Using a variety of modern technologies and languages developing web
            applications.
          </li>
        </ul>
      </div>
      <div>
        <h3>Skills</h3>
        <ul>
          <li>HTML / CSS</li>
          <li>SASS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Redux</li>
          <li>Redux Toolkit</li>
          <li>TailwindCSS</li>
          {/* <li>Bulma</li> */}
          <li>Styled-components</li>
          <li>Git / GitHub</li>
          <li>Firebase</li>
          {/* <li>Figma</li> */}
        </ul>
      </div>
      <div>
        <h3>Education</h3>
        <h4>
          Zhytomyr Polytechnic State University, Zhytomyr{' '}
          <span>- Bachelor</span>
        </h4>
        <p className="date">September 2019 - Present</p>
        <p>
          The comprehensive public administration curriculum, covering a wide
          range of valuable and relevant skills, a grasp of management methods
          and analytical tools.
        </p>
      </div>
      <div>
        <h3>Languages</h3>
        <ul>
          <li>English (B2+)</li>
          <li>Polish (C1)</li>
          <li>French (A2)</li>
          <li>Ukrainian - Native</li>
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: grid;
  margin: 3rem 0;
  grid-template-columns: auto 1fr;
  gap: 1.5rem;

  h3 {
    font-weight: 500;
    font-size: 28px;
  }
  h4 {
    font-size: 18px;
  }

  p {
    margin-bottom: 0;
  }

  div {
    box-shadow: rgba(149, 157, 165, 0.15) 0px 8px 24px;
    padding: 2rem 2.5rem;
    border-radius: 20px;

    &:hover {
      box-shadow: rgba(149, 157, 165, 0.185) 0px 8px 24px;
    }
  }

  ul {
    list-style-type: disc;
    padding-left: 0.4rem;
  }

  .date {
    color: #ccc;
    /* text-transform: uppercase; */
  }

  /* .border-wrap {
    position: relative;
    background: linear-gradient(to right, #f7f7f7, #fcfcfc);
    padding: 3px;
    border-radius: 23px;
  } */
`;

export default About;
