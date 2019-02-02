import React, { Component } from 'react';
import ProjectItem from './../ProjectItem/ProjectItem.js';
//Material UI
import Card from '@material-ui/core/Card';


class ProjectCard extends Component {

    componentDidMount = () => {
        this.getProjects();
    }

    getProjects = () => {
        this.props.dispatch({
            type: 'GET_PROJECTS'
        })
    }

    render() {
        return(
            <div>
                <Card>
                    <ProjectItem />
                </Card>
            </div>
        )
    }
}

export default ProjectCard;