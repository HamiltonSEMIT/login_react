import React, { useContext } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import { Home } from './pages/Home/idex';
import { Private } from './pages/Private/idex';
import { RequireAuth } from './contexts/Auth/RequireAuth';
import { AuthContext } from './contexts/Auth/AuthContext';

function App() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.signout();
    navigate('/');
  }
  return (
    <div className="App">
      <header>
       <h1>Header do Site</h1>
       <nav>
        <Link to='/'>Home</Link>
        <Link to='/private'>Private</Link>
        {auth.user && <button onClick={handleLogout}>Sair</button>}
       </nav>
      </header>
      <hr />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/private" element={<RequireAuth><Private/></RequireAuth>}/>
    </Routes>
    </div>
  );
}

export default App;
