import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserDetail from './pages/UserDetail/UserDetail';
import UserList from './pages/UserList/UserList';
import Navbar from './components/Navbar';
import './App.css'
import UserCreate from './pages/UserCreate/UserCreate';
import ProfileCreate from './pages/ProfileCreate/ProfileCreate';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/users/:id" element={<UserDetail />} />
        <Route path="/users/new" element={<UserCreate />} />
        <Route path="/profile/new" element={<ProfileCreate />} />
      </Routes>
    </Router>
  );
}

export default App;