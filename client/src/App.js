import React from 'react';
import About from './pages/About';
import Contact from './pages/contact';
import Feature from './pages/weoffer';
import Header from './pages/home';
import Navbar from './pages/Navbar';
import Offer from './pages/team';
import Login from './pages/Login';
import Signup from './pages/Signup';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />  
          <div>
            <Routes>
              <Route 
                path="/"
                element={<Header />}
              />
              <Route 
                path="/weoffer"
                element={<Feature />}
              />
              <Route 
                path="/team"
                element={<Offer />}
              />
              <Route 
                path="/about"
                element={<About />}
              />
              <Route 
                path="/contact"
                element={<Contact />}
              />
              <Route 
                path="/login"
                element={<Login />}
              />
               <Route 
                path="/signup"
                element={<Signup />}
              />

            </Routes>
          </div>
        </div>
      </Router>
    
    </div>
  );
}

export default App;
