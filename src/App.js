import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import ErrorPage from './pages/ErrorPage';
import Profile from './pages/Profile';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
