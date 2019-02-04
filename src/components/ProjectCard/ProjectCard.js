import React, { Component } from 'react';
import ProjectItem from './../ProjectItem/ProjectItem.js';
import { connect } from 'react-redux';
//Material UI
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';


class ProjectCard extends Component {

    //When the document has loaded, a 
    //dispatch is sent to index.js for the projects
    //stored in the database

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
            <Grid container item xs={12}>
                <Card>
                    {this.props.reduxState.projects.map((project) => {
                        return <ProjectItem project={project} key={project.id} />
                    })}
                </Card>
            </Grid>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    reduxState,
});

export default connect(mapStateToProps)(ProjectCard);