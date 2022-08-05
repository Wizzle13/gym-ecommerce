import React from 'react';
import About from './homepage/About';
import Contact from './homepage/contact';
import Feature from './homepage/weoffer';
import Header from './homepage/home';
import Navbar from './homepage/Navbar';
import Offer from './homepage/team';
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
