import React from 'react';
import About from './pages/About';
import Contact from './pages/contact';
import Feature from './pages/weoffer';
import Header from './pages/home';
import Navbar from './pages/Navbar';
import Offer from './pages/team';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Feature />
      <Offer />
      <About />
      <Contact />
    </div>
  );
}

export default App;
