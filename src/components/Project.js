import styled from 'styled-components';
import { BsLink45Deg, BsGithub } from 'react-icons/bs';
import { AiOutlineLink } from 'react-icons/ai';

const Project = ({ id, name, desc, features, images, gh, url }) => {
  return (
    <Wrapper>
      <div className="composition">
        <p className="title">{name}</p>
        {images.map((image, i) => (
          <>
            <img
              key={i}
              src={image}
              alt={`${name} pic ${i + 1}`}
              className={`composition__photo composition__photo--p${i + 1}`}
            />
          </>
        ))}
      </div>
      <div className="info">
        <h4>{name}</h4>
        <div className="info-container">
          <p>{desc}</p>
          <div className="links-container">
            {url && (
              <a href={url} target="_blank" rel="noreferrer">
                <AiOutlineLink />
              </a>
            )}
            {gh && (
              <a href={gh} target="_blank" rel="noreferrer">
                <BsGithub />
              </a>
            )}
          </div>
        </div>

        {/* <p>{features}</p> */}
        {/* <h5>Main features</h5>
        <ul>
          {features.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul> */}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  /* display: flex; */

  position: relative;
  /* background-color: whitesmoke; */
  /* padding: 0rem 2rem;
  box-shadow: rgba(149, 157, 165, 0.15) 0px 8px 24px; */
  /* border-bottom: 1px solid #ccc; */

  .title {
    margin-bottom: 18rem;
    z-index: 100;
  }

  .info:not(:last-of-type) {
    margin-bottom: 8.5rem;
  }

  .info:last-of-type {
    margin-bottom: 1rem;
  }

  .info-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .links-container {
    display: flex;
    align-items: center;
    gap: 1rem;

    a {
      color: #ccc;
    }
  }

  .composition {
    margin-top: 6rem;
    /* margin-bottom: 10rem; */
    &__photo {
      width: 55%;
      box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.1);
      border-radius: 2px;
      position: absolute;
      z-index: 10;
      transition: all 0.2s;
      outline-offset: 1rem;

      &--p1 {
        left: -5%;
        top: 0rem;
        z-index: 12;
      }
      &--p2 {
        right: 20%;
        top: 3rem;
        z-index: 11;
      }
      &--p3 {
        left: 60%;
        top: 6rem;
      }

      &:hover {
        /* outline: 1.5rem solid #ccc; */
        transform: scale(1.05) translateY(-0.5rem);
        box-shadow: 0 2.5rem 4rem rgba(0, 0, 0, 0.3);
        z-index: 20;
      }
    }
    &:hover &__photo:not(:hover) {
      transform: scale(0.95);
    }
  }

  span a {
    letter-spacing: 0.75px;
    font-weight: 500;
  }

  /* ul {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 1rem;
  }
  li {
    list-style-type: disc;
    margin-left: 1.75rem;
  } */
`;

export default Project;
