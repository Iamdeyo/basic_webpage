import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import ErrorPage from './pages/ErrorPage';
import Profile from './pages/Profile';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <BrowserRouter>
        <main className="pt-16 px-4 container mx-auto">
          <Routes>
            <Route path="/" exact element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
