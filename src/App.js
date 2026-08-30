import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Support from './pages/Support';
import Mark from './components/Mark';
import ScrollToTop from './components/ScrollToTop';
import { TERMS_URL } from './config';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/support">Support</Link>
        <a href={TERMS_URL} target="_blank" rel="noreferrer">
          Terms of Use
        </a>
      </div>
      <p className="footer-note">
        WorthLater shows illustrations, not forecasts. Nothing in the app or on
        this page is financial advice.
      </p>
    </footer>
  );
}

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="app">
        <header className="site-header">
          <Link className="brand-link" to="/">
            <Mark size={26} />
            <span className="brand-word">WorthLater</span>
          </Link>
        </header>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/support" element={<Support />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
