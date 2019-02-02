import React, { Component } from 'react';
import { connect } from 'react-redux';

class AdminPage extends Component {
    render() {
        return(
            <div>
                <p>hello admin page</p>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    reduxState,
});

export default connect(mapStateToProps)(AdminPage);