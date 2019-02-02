import React, { Component } from 'react';
import { connect } from 'react-redux';

class AdminPage extends Component {
    render() {
        return (
            <div>
                <form>
                    <label>Add a new project</label><br/>
                    <input type='text' placeholder="name" /><br/>
                    <input type='text' placeholder="description" /><br/>
                    <input type='text' placeholder="thumbnail source" /><br/>
                    <input type='text' placeholder="website" /><br/>
                    <input placeholder="date completed (dd-mm-yyyy)" /><br/>
                    <select>
                        <option value="React">React</option>
                        <option value="jQuery">jQuery</option>
                        <option value="Node">Node</option>
                        <option value="SQL">SQL</option>
                        <option value="Redux">Redux</option>
                        <option value="HTML">HTML</option>
                    </select>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    reduxState,
});

export default connect(mapStateToProps)(AdminPage);