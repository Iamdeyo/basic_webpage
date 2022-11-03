import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage';
import Profile from './pages/Profile';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Profile />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
