import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import EditPage from './pages/EditPage';
import CreatePage from './pages/CreatePage';

import Navbar from './components/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/:id" element={<DetailPage />} />
        <Route path="/:id/edit" element={<EditPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
