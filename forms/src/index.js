import React, { Component } from 'react';
import { render } from 'react-dom';

const rootNode = document.getElementById('root');

class NameForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        alert(`The name is : ${this.state.value}`);
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({ value: event.target.value.toUpperCase() });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    {this.state.value}
                </label>
                <br />
                <label>
                    Name:
                        <input type="text" onChange={this.handleChange} />
                </label>
                <br />
                <input type="submit" value="Submit" />
                <br />
                <textarea value={this.state.value} />
            </form>
        );
    }
}

render(
    <NameForm />,
    rootNode
);