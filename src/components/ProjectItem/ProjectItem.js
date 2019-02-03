import React, { Component } from 'react';
import { connect } from 'react-redux';
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
                <img src={this.props.project.thumbnail} /><br/>
                <p>Name: {this.props.project.name}</p><br/>
                <p>Descripton: {this.props.project.description}</p><br/>
                <a href={this.props.project.github}>Github</a><br/>
                <a href={this.props.project.website}>Website</a><br/>
                <p>Technology: {this.props.project.technology}</p>
                </Typography>
            </CardContent>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    reduxState,
});

export default connect(mapStateToProps)(ProjectItem);