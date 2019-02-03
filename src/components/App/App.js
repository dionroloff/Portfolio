import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import NameHeader from './../NameHeader/NameHeader.js';
import ProjectCard from './../ProjectCard/ProjectCard.js';
import AdminPage from './../AdminPage/AdminPage.js';
//Material UI
import Divider from '@material-ui/core/Divider';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div>
        <NameHeader />
        <Divider variant="middle" />
        <ProjectCard />


        
        <Router>
          <div>
            {/* Link to admin page */}
            <Link to='/my-admin'>Admin Page</Link>
            {/* route to admin page */}
            <Route exact path={'/my-admin'} component={AdminPage}/>
          </div>
        </Router> 
        
      </div>
    );
  }
}

export default App;
