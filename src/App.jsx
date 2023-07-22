import React, { useRef, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate} from 'react-router-dom';
import "./App.css";

import Interface from "./components/Interface";
import Login from "./components/login";
import Comms from "./components/Comms.jsx";
import RouteInputs from "./components/latlondis";

import HomePage from './components/HomePage';
import Interface2 from './components/interface2';
import ShowRoute from './components/ShowRoute';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Account from './components/Account';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
// If a route can not be displayed this function is invoked from Route path
function MatchAllRoute() {
  return <h2>The requested page does not exist</h2>;
}

function App() {

  const [inputValues, setInputValues] = useState({
    "latitude": 40.74218481889335,
    "longitude": -73.98786664009094,
    "hour": 0,
    waypoints: [],
  });

  return (
    <div>
      <Router>
        <AuthContextProvider>

        <Routes>
          <Route exact path="/" element={<Interface inputValues={inputValues} setInputValues={setInputValues} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/comms" element={<Comms />} />
          <Route path="/latlondis" element={<RouteInputs />} />
          <Route path="*" element={<MatchAllRoute />} />
          <Route path="/interface" element={<Interface2 />} />
          <Route path="/showroute" element={<ShowRoute />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account" element={ <ProtectedRoute><Account /></ProtectedRoute>} />
        </Routes>

        </AuthContextProvider>
      </Router >
    </div >
  );
}

export default App;