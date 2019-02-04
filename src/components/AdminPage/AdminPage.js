import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminProjectRender from './../AdminProjectRender/AdminProjectRender.js';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import ProjectCard from '../ProjectCard/ProjectCard.js';

class AdminPage extends Component {

    state = {
        name: '',
        description: '',
        // thumbnail: '',
        website: '',
        date_completed: '',
        technology: '',
    };


    handleNameChange = (event) => {
        console.log(event.target.value);
        this.setState({ name: event.target.value })
    }
    handleDescriptionChange = (event) => {
        console.log(event.target.value);
        this.setState({ description: event.target.value });
    }
    // handleThumbnailChange = (event) => {
    //     console.log(event.target.value);
    //     this.setState({ thumbnail: event.target.value });
    // }
    handleWebsiteChange = (event) => {
        console.log(event.target.value);
        this.setState({ website: event.target.value });
    }
    handleDateChange = (event) => {
        console.log(event.target.value);
        this.setState({ date_completed: event.target.value });
    }
    handleTechChange = (event) => {
        this.setState({ technology: Number(event.target.value) });
        console.log(typeof Number(event.target.value));
    }

    handleClick = (event) => {
        event.preventDefault();
        console.log('submit button clicked')
        const action = { type: 'ADD_PROJECT', payload: this.state };
        console.log(action)
        this.props.dispatch(action);
    }

    render() {
        return (
            <div>
                <form>
                    <label>Add a new project</label><br />
                    <input type='text' placeholder="name" onChange={this.handleNameChange} /><br />
                    <input type='text' placeholder="description" onChange={this.handleDescriptionChange} /><br />
                    {/* <input type='text' placeholder="thumbnail source" onChange={this.handleThumbnailChange} /><br /> */}
                    <input type='text' placeholder="website" onChange={this.handleWebsiteChange} /><br />
                    <input type="date" placeholder="date completed (dd-mm-yyyy)" onChange={this.handleDateChange} /><br />
                    <select onChange={this.handleTechChange}>
                        <option value={1}>React</option>
                        <option value={2}>jQuery</option>
                        <option value={3}>Node</option>
                        <option value={4}>SQL</option>
                        <option value={5}>Redux</option>
                        <option value={6}>HTML</option>
                    </select>
                    <input type='submit' value='submit project' onClick={this.handleClick} />
                </form>
                
                {/* Hashrouter */}
                <Router>
                    <div>
                        {/* Link to projects page */}
                        <button><Link to='/'>Projects page</Link></button>
                        {/* route to projects page */}
                        <Route exact path={'/'} component={ProjectCard}/>
                    </div>
                </Router>

                <ul>
                    <h3>List of projects</h3>
                    {this.props.reduxState.projects.map((project) => {
                        return <AdminProjectRender project={project} id={project.id}/>
                    })}
                </ul>

            </div>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    reduxState,
});

export default connect(mapStateToProps)(AdminPage);