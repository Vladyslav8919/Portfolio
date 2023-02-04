import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SharedLayout from './pages/SharedLayout';
import Error from './pages/Error';
import {
  Home,
  About,
  Projects,
  Certificates,
  Contacts,
  Guestbook,
  ErrorPage,
} from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="certificates" element={<Certificates />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="guestbook" element={<Guestbook />} />
        </Route>
        <Route path="register" element={<Certificates />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
