import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import './App.css';
import SideBar from './components/SideBar/SideBar';

export default function App() {
  return (
    <div className="flex h-screen">
      <SideBar />
      <main className="flex-1 bg-gray-300">
        {/* Add your main content here */}
      </main>
    </div>
  );
}
