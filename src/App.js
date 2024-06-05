import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/home_page';
import Userpage from './pages/user/user_view';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user" element={<Userpage />} />
      </Routes>
    </Router>

  );
}

export default App;
