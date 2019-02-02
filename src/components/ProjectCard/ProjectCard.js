import React, { Component } from 'react';
import ProjectItem from './../ProjectItem/ProjectItem.js';
import { connect } from 'react-redux';
//Material UI
import Card from '@material-ui/core/Card';


class ProjectCard extends Component {

    componentDidMount = () => {
        this.getProjects();
    }

    getProjects = () => {
        console.log('in client side getProjects')
        this.props.dispatch({
            type: 'GET_PROJECTS'
        })
    }

    render() {
        return (
            <Card>
                    {this.props.reduxState.projects.map((project) => {
                        return <ProjectItem project={project} key={project.id}/>
                    })}
            </Card>    
        )
    }
}

const mapStateToProps = (reduxState) => ({
    reduxState,
});

export default connect(mapStateToProps)(ProjectCard);