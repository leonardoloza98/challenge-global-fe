import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserDetail from './pages/UserDetail/UserDetail';
import UserList from './pages/UserList/UserList';
import Navbar from './components/Navbar';
import './App.css'
import UserCreate from './pages/UserCreate/UserCreate';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/users/:id" element={<UserDetail />} />
        <Route path="/users/new" element={<UserCreate />} />
      </Routes>
    </Router>
  );
}

export default App;