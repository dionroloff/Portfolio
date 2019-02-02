import React, { Component } from 'react';
import './App.css';
import NameHeader from './../NameHeader/NameHeader.js';
import ProjectCard from './../ProjectCard/ProjectCard.js';
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
      </div>
    );
  }
}

export default App;
