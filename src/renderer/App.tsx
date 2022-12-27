import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import 'tailwindcss/tailwind.css';
import './App.css';
import SideBar from './components/SideBar/SideBar';
import NavBar from './components/NavBar/NavBar';

const Hello = () => {
  return (
    <div>
      <div className="Hello">
        <img width="200" alt="icon" src={icon} />
      </div>
      <h1>electron-react-boilerplate</h1>
      <div className="Hello">
        <a
          href="https://electron-react-boilerplate.js.org/"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              📚
            </span>
            Read our docs
          </button>
        </a>
        <a
          href="https://github.com/sponsors/electron-react-boilerplate"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="folded hands">
              🙏
            </span>
            Donate
          </button>
        </a>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="flex h-screen flex-row">
      <div className="side-bar">
        <SideBar />
      </div>
      <div className="flex grow flex-col">
        <div className="nav-bar">
          <NavBar />
        </div>
        <div className="router content-center flex justify-center">
          <Router>
            <Routes>
              <Route path="/" element={<Hello />} />
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
}
