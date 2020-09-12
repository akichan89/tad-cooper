import React from 'react';
import logo from './logo.png';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';


import { Contact } from './Contact';
import { Home } from './Home';
import { About } from './About';

import Sidebar from './components/Sidebar';
import { Order } from './Order';

import { FooterBar } from './components/Footer';



function App() {
  return (
    
    <React.Fragment>
      <Router>
        <NavigationBar>
          <i class="fas fa-dragon"></i> 
        </NavigationBar>
        
     

        <Sidebar />

     


        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/order" component={Order} />
          <Route path="/contact" component={Contact} />
         
        </Switch>
      </Router>
      <FooterBar />
      
    </React.Fragment>

   
  );
}

export default App;