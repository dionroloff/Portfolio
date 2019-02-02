import React, { Component } from 'react';
import { connect } from 'react-redux';

class AdminPage extends Component {

    state = {
        name: '',
        description: '',
        thumbnail: '',
        website: '',
        date_completed: '',
        technology: '',
    };


    handleChange = (event) => {
        console.log(event.target.value);
        this.setState({
            name: event.target.value,
            description: event.target.value,
            thumbnail: event.target.value,
            website: event.target.value,
            date_completed: event.target.value,
            technology: event.target.value,
        })
    }

    handleClick = (event) => {
        event.preventDefault();
        const action = { type: 'ADD_PROJECT', payload: this.state};
        this.props.dispatch(action);
    }


    render() {
        return (
            <div>
                <form>
                    <label>Add a new project</label><br />
                    <input type='text' placeholder="name" onChange={this.handleChange} /><br />
                    <input type='text' placeholder="description" onChange={this.handleChange} /><br />
                    <input type='text' placeholder="thumbnail source" onChange={this.handleChange} /><br />
                    <input type='text' placeholder="website" onChange={this.handleChange} /><br />
                    <input placeholder="date completed (dd-mm-yyyy)" onChange={this.handleChange} /><br />
                    <select onChange={this.handleChange}>
                        <option value="React">React</option>
                        <option value="jQuery">jQuery</option>
                        <option value="Node">Node</option>
                        <option value="SQL">SQL</option>
                        <option value="Redux">Redux</option>
                        <option value="HTML">HTML</option>
                    </select>
                    <input type='submit' value='submit project' onClick={this.handleClick} />
                </form>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    reduxState,
});

export default connect(mapStateToProps)(AdminPage);