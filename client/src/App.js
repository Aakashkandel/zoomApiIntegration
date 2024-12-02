import './App.css';
import Home from './components/Home';
import Complain from './components/Complain';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/layouts/Nav';
import Register from './components/Register';
import Login from './components/Login';
import UserBeforeLogin from './protectedroute/UserBeforeLogin';
import History from './components/History';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          {/* Routes before login */}
          <Route element={<Nav />}>
            <Route path="/" index element={<Home />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>

          {/* Route after login */}
          <Route element={<Nav />}>
            <Route 
              path="/complain" 
              element={<UserBeforeLogin Component={Complain} />} 

            />

            <Route
            path="/history"
            element={<UserBeforeLogin Component={History}/>}/>
            
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
