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


    handleNameChange = (event) => {
        console.log(event.target.value);
        this.setState({name: event.target.value})
    }
    handleDescriptionChange = (event) => {
        console.log(event.target.value);
        this.setState({description: event.target.value});
    }
    handleThumbnailChange = (event) => {
        console.log(event.target.value);
        this.setState({thumbnail: event.target.value});
    }
    handleWebsiteChange = (event) => {
        console.log(event.target.value);
        this.setState({website: event.target.value});
    }
    handleDateChange = (event) => {
        console.log(event.target.value);
        this.setState({date_completed: event.target.value});
    }
    handleTechChange = (event) => {
        console.log(event.target.value);
        this.setState({technology: event.target.value});
    }

    handleClick = (event) => {
        event.preventDefault();
        console.log('submit button clicked')
        const action = { type: 'ADD_PROJECT', payload: this.state};
        console.log(action)
        // this.props.dispatch(action);
    }


    render() {
        return (
            <div>
                <form>
                    <label>Add a new project</label><br />
                    <input id="name" type='text' placeholder="name" onChange={this.handleNameChange} /><br />
                    <input id="description" type='text' placeholder="description" onChange={this.handleDescriptionChange} /><br />
                    <input type='text' placeholder="thumbnail source" onChange={this.handleThumbnailChange} /><br />
                    <input type='text' placeholder="website" onChange={this.handleWebsiteChange} /><br />
                    <input placeholder="date completed (dd-mm-yyyy)" onChange={this.handleDateChange} /><br />
                    <select onChange={this.handleTechChange}>
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