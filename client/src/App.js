import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import About from './pages/About';
import Contact from './pages/contact';
import Feature from './pages/weoffer';
import Header from './pages/home';
import Navbar from './pages/Navbar';
import Offer from './pages/team';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Trainer from './pages/trainerPick';
import Profile from './pages/Profile';
import Quiz from './pages/Quiz';
import Emerald from './pages/emerald';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
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
              <Route 
                path="/profile"
                element={<Profile />}
              />
              <Route 
                path="/quiz"
                element={<Quiz />}
              />
              <Route 

                path="/emerald"
                element={<Emerald />}
              />
              
              <Route
                path="/trainer"
                element={<Trainer />}

              />



            </Routes>
          </div>
        </div>
      </Router>
      </ApolloProvider>
    
    </div>
  );
}

export default App;
