import useDocumentTitle from '../hooks/useDocumentTitle';
import {
  introToFrontend,
  jsMeta,
  resWebsites,
  completeJs,
  modernReact,
  reactComplete,
  sass,
  apis,
} from '../assets/images';
import styled from 'styled-components';

const data = [
  {
    name: "'Introduction to Front-End Development' an online non-credit course authorized by Meta",
    url: 'https://www.coursera.org/account/accomplishments/certificate/Z3SQGB452PVF',
    img: introToFrontend,
  },
  {
    name: "'Programming with JavaScript' an online non-credit course authorized by Meta",
    url: 'https://www.coursera.org/account/accomplishments/verify/DR8PSS3TWT5V',
    img: jsMeta,
  },
  {
    name: "'Build Responsive Real-World Websites with HTML and CSS' Udemy course",
    url: 'https://www.udemy.com/certificate/UC-7b3115c7-f5aa-4871-8a43-78f82bbb447b/',
    img: resWebsites,
  },
  {
    name: "'The Complete JavaScript Course 2022' an online non-credit course offered through Udemy",
    url: 'https://www.udemy.com/certificate/UC-7f2cc19f-f5ed-4ed2-aa18-7e5606b5728c/',
    img: completeJs,
  },
  {
    name: "'React - The Complete Guide (incl Hooks, React Router, Redux)' an online non-credit course offered through Udemy",
    url: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-2263b72d-9e66-494e-aaf1-93e082753c44.pdf',
    img: reactComplete,
  },
  {
    name: "'Modern React with Redux 2023' an online non-credit course offered through Udemy",
    url: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-fa53967c-d039-4a20-a13d-cccf544bc633.pdf',
    img: modernReact,
  },
  {
    name: 'SASS - The Complete SASS Course (CSS Preprocessor)',
    url: 'https://www.udemy.com/certificate/UC-e90c8263-ac61-4956-bbc2-742e4c0a83a3/',
    img: sass,
  },
  {
    name: 'Understanding APIs and RESTful APIs Course',
    url: '"https://udemy-certificate.s3.amazonaws.com/pdf/UC-2ff73a05-d839-4448-ac44-9e0f64602d31.pdf"',
    img: apis,
  },
];

const Certificates = () => {
  useDocumentTitle('Certificates');

  return (
    <Wrapper>
      {/* <h3>Additional Education</h3> */}
      <section className="container">
        {data.map((item, i) => (
          <article key={i} className="card">
            <img src={item.img} alt={item.name} />
            <a href={item.url} target="_blank" rel="noreferrer">
              {item.name}
            </a>
          </article>
        ))}
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  margin: 2.5rem 0;
  margin-left: -0.5rem;

  .container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    row-gap: 2.5rem;
  }
  .card {
    background-color: #fff;
    /* box-shadow: rgba(149, 157, 165, 0.15) 0px 8px 24px; */
    /* padding: 1rem 0.75rem; */
    border-radius: 5px;
    /* max-width: 400px; */
    display: flex;
    flex-direction: column;
    transition: all 0.2s ease-in-out;

    &:hover {
      /* transform: scale(1.025); */

      /* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; */
    }

    img {
      max-width: 100%;
    }
  }

  a {
    letter-spacing: normal;
    line-height: 1.25;
    margin-top: 1rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    margin-bottom: 0.25rem;
    font-size: 14px;
    font-weight: 500;
    color: #29274c;

    &:visited {
      color: #5d576b;
    }
  }
`;

export default Certificates;
