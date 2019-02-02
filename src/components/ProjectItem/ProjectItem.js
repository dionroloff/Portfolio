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
                {this.props.project.name}
                {this.props.project.description}
                </Typography>
            </CardContent>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    reduxState,
});

export default connect(mapStateToProps)(ProjectItem);