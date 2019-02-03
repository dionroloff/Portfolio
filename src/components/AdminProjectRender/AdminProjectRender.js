import React, { Component } from 'react';
import { connect } from 'react-redux';

class AdminProjectRender extends Component {

    handleDelete = (event) => {
        console.log(this.props.project.id);
        this.props.dispatch({
            type: 'DELETE_PROJECT',
            payload: this.props.project
        })
    
    }

    render() {
        return (
            <div>
                
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