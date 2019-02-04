import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ProjectItem.css';
//Material UI
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class ProjectItem extends Component {

    //This component creates a material ui card for each rendered project
    //returned from the database
    render() {
        return (
            <CardContent>
                <Typography>
                {/* conditionally render a name, description, thumbnail, website, date complete and a tag */}
                <span><img id='img-1' src='./images/prime-review.png' /></span>
                <span><p>Name: {this.props.project.name}</p></span>
                <span><p>Descripton: {this.props.project.description}</p></span>
                <span><a href='https://github.com/dionroloff/Feedback_Form' target="_blank">Github</a></span><br />
                <span><a href={this.props.project.website}>Website</a></span>
                <span><p>Technology: {this.props.project.technology}</p></span>
                </Typography>
            </CardContent>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    reduxState,
});

export default connect(mapStateToProps)(ProjectItem);