import React, { Component } from 'react';
import { connect } from 'react-redux';
//Material UI
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class ProjectItem extends Component {
    render() {
        return (
            <CardContent>
                <Typography>
                {/* conditionally render a name, description, thumbnail, website, date complete and a tag */}
                {this.props.project.name}
                {this.props.project.description}
                {this.props.project.thumbnail}
                {this.props.project.website}
                {this.props.project.date_completed}
                {this.props.project.technology}
                </Typography>
            </CardContent>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    reduxState,
});

export default connect(mapStateToProps)(ProjectItem);