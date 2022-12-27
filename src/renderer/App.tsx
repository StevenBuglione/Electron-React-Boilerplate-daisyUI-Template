import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import './App.css';
import SideBar from './components/SideBar/SideBar';
import NavBar from './components/NavBar/NavBar';

export default function App() {
  return (
    <div className="flex h-screen">
      <SideBar />
      <header className="flex-1 bg-gray-300">
        <NavBar />
      </header>
    </div>
  );
}
