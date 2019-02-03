import React, { Component } from 'react';
import { connect } from 'react-redux';

class AdminProjectRender extends Component {

    handleDelete = (event) => {
        console.log('in handleDelete');
    }

    render() {
        return (
            <div>
                <h3>List of projects</h3>
                <li>
                    {this.props.project.name}
                    <button onClick={this.handleDelete}>Delete project</button>
                </li>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    reduxState,
});

export default connect(mapStateToProps)(AdminProjectRender);