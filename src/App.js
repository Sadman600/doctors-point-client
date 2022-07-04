
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Appointment from './Pages/Appointment/Appointment';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/appointment' element={<Appointment></Appointment>}></Route>
      </Routes>
    </div>
  );
}

export default App;
