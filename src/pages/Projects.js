import {
  unilevex1,
  unilevex2,
  unilevex3,
  lafleur1,
  lafleur2,
  lafleur3,
  omnifood1,
  omnifood2,
  omnifood3,
  bankistLanding1,
  bankistLanding2,
  bankistLanding3,
  bankistApp1,
  bankistApp2,
  bankistApp3,
  bookify1,
  bookify2,
  bookify3,
  catcafe1,
  catcafe2,
  catcafe3,
  forkify1,
  forkify2,
  forkify3,
  gitHubUser1,
  gitHubUser2,
  gitHubUser3,
  guessMyNumber1,
  guessMyNumber2,
  guessMyNumber3,
  mystiqueStore1,
  mystiqueStore2,
  mystiqueStore3,
  additional7,
  additional12,
  additional13,
  mapty1,
  mapty2,
  mapty3,
  timie1,
  timie2,
  timie3,
  quizApp1,
  quizApp2,
  quizApp3,
  restauria1,
  restauria2,
  restauria3,
} from '../assets/images';
import useDocumentTitle from '../hooks/useDocumentTitle';
import Project from '../components/Project';

const data = [
  {
    id: 1,
    name: 'Unilevex',
    desc: 'A Furniture Store built with React and TailwindCSS',
    url: 'https://unilevex-vp.netlify.app/',
    gh: 'https://github.com/Vladyslav8919/Unilevex',
    features: ['feature1', 'feature2', 'feature3'],
    images: [unilevex1, unilevex2, unilevex3],
  },
  {
    id: 2,
    name: 'La Fleur',
    desc: 'A Flower eCommerce store built with React and Styled-components',
    url: 'https://la-fleur.netlify.app/',
    gh: 'https://github.com/Vladyslav8919/La-Fleur',
    features: 'Main features: authentication, payment, newsletter, cart.',
    images: [lafleur1, lafleur2, lafleur3],
  },
  {
    id: 3,
    name: 'Omnifood',
    desc: 'Landing page for a Meal Delivery service',
    url: 'https://sfomnifood.netlify.app/',
    gh: 'https://github.com/Vladyslav8919/Omnifood',
    features: ['feature1', 'feature2', 'feature3'],
    images: [omnifood1, omnifood2, omnifood3],
  },
  {
    id: 4,
    name: 'Bankist Landing',
    desc: 'Landing page for a Bank application',
    url: 'https://bankist-marketing-vp.netlify.app/',
    gh: 'https://github.com/Vladyslav8919/Bankist-Marketing',
    features: ['feature1', 'feature2', 'feature3'],
    images: [bankistLanding1, bankistLanding2, bankistLanding3],
  },
  {
    id: 5,
    name: 'Bankist App',
    desc: 'Bank application with authentication, money transfers and other features',
    url: 'https://my-bankist-test.netlify.app/',
    gh: 'https://github.com/Vladyslav8919/Bankist',
    features: ['feature1', 'feature2', 'feature3'],
    images: [bankistApp1, bankistApp3, bankistApp2],
  },
  {
    id: 6,
    name: 'Bookify',
    desc: 'Book store landing page with lots of custom features',
    url: 'https://bookify-vp.netlify.app/',
    gh: 'https://github.com/Vladyslav8919/Bookify',
    features: ['feature1', 'feature2', 'feature3'],
    images: [bookify1, bookify2, bookify3],
  },
  {
    id: 7,
    name: 'Cat Cafe',
    desc: 'A nonprofit cat rescue organization website',
    url: 'https://cat-cafe-vp.netlify.app/',
    gh: 'https://github.com/Vladyslav8919/Cat-Cafe',
    features: ['feature1', 'feature2', 'feature3'],
    images: [catcafe1, catcafe2, catcafe3],
  },
  {
    id: 8,
    name: 'Forkify',
    desc: 'App for searching, saving and adding your favourite recipes',
    url: 'https://forkify-vp.netlify.app/',
    gh: 'https://github.com/Vladyslav8919/Forkify',
    features: ['feature1', 'feature2', 'feature3'],
    images: [forkify1, forkify2, forkify3],
  },
  {
    id: 9,
    name: 'Mapty',
    desc: 'App for keeping track of your activities and progress',
    url: 'https://my-mapty-vp.netlify.app/',
    gh: 'https://github.com/Vladyslav8919/Mapty',
    features: ['feature1', 'feature2', 'feature3'],
    images: [mapty1, mapty2, mapty3],
  },
  {
    id: 10,
    name: 'Timie',
    desc: 'Increasing productivity time tracking app',
    url: 'https://timie.netlify.app/',
    gh: 'https://github.com/Vladyslav8919/Timie',
    features: ['feature1', 'feature2', 'feature3'],
    images: [timie1, timie2, timie3],
  },
  {
    id: 11,
    name: 'Restauria',
    desc: 'Elegant Fine dining landing page',
    url: 'https://restauria-vp.netlify.app/',
    gh: 'https://github.com/Vladyslav8919/Restauria',
    features: ['feature1', 'feature2', 'feature3'],
    images: [restauria1, restauria2, restauria3],
  },
  {
    id: 12,
    name: 'Quiz App',
    desc: 'Fancy quiz app with a wide variety of quizes',
    url: 'https://quiz-app-vp.netlify.app/',
    gh: 'https://github.com/Vladyslav8919/Quiz-App',
    features: ['feature1', 'feature2', 'feature3'],
    images: [quizApp1, quizApp2, quizApp3],
  },
  {
    id: 13,
    name: 'Git Hub User',
    desc: "Search for someone's GitHub or checkout your own stats",
    url: 'https://react-search-for-github-user.netlify.app/login',
    gh: 'https://github.com/Vladyslav8919/react-search-for-github-user',
    features: ['feature1', 'feature2', 'feature3'],
    images: [gitHubUser3, gitHubUser1, gitHubUser2],
  },
  {
    id: 14,
    name: 'Guess My Number',
    desc: 'Simple yet very enjoyable guessing number game',
    url: 'https://my-number-superguesser-game.netlify.app/',
    gh: 'https://github.com/Vladyslav8919/Guess-My-Number',
    features: ['feature1', 'feature2', 'feature3'],
    images: [guessMyNumber1, guessMyNumber3, guessMyNumber2],
  },
  {
    id: 15,
    name: 'Mystique Store',
    desc: 'Stylish clothing store landing page',
    url: 'https://mystique-store-vp.netlify.app/',
    gh: 'https://github.com/Vladyslav8919/Mystique-Store',
    features: ['feature1', 'feature2', 'feature3'],
    images: [mystiqueStore1, mystiqueStore2, mystiqueStore3],
  },
  {
    id: 17,
    name: 'Others',
    desc: (
      <span>
        Checkout other projects on my{' '}
        <a
          href="https://github.com/Vladyslav8919"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </span>
    ),
    features: [],
    images: [additional7, additional12, additional13],
  },
];

const Projects = () => {
  useDocumentTitle('Projects');
  return (
    <main>
      <section>
        {data.map((item) => (
          <Project key={item.id} {...item} />
        ))}
      </section>
    </main>
  );
};
export default Projects;
