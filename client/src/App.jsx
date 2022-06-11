import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import EditPage from './pages/EditPage';
import CreatePage from './pages/CreatePage';
import RegisterPage from './pages/RegisterPage';
import LogInPage from './pages/LogInPage';

import Navbar from './components/Navbar';
import AuthenticationContext from './context/authentication';
import { loadUserInformation } from './services/authentication';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    loadUserInformation().then((data) => {
      setUser(data.user);
    });
  }, []);

  return (
    <AuthenticationContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/log-in" element={<LogInPage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/:id" element={<DetailPage />} />
          <Route path="/:id/edit" element={<EditPage />} />
        </Routes>
      </BrowserRouter>
    </AuthenticationContext.Provider>
  );
};

export default App;
