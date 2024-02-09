import logo from './logo.svg';
import './App.css';
import Login from './Component/Login';
import Dashboard from './Component/Dashboard';
import { BrowserRouter as Router, Route, Switch,Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes> 
    </Router>
  );
}

export default App;

