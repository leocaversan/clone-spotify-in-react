import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './App/Pages/Login';
import Home from './App/Pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
