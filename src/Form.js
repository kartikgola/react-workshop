import React from 'react';
import './Form.css';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.initialState = {
            priority: '',
            item: ''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const {name, value} = event.target;

        this.setState({
            [name]: value
        });
    }

    submitForm = (e) => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
        e.preventDefault();
    }

    render() {
        const {priority, item} = this.state;

        return (
            <form className="Form-add" onSubmit={this.submitForm}>
                <div className="Form-section">
                    <input type="text" name="priority" placeholder="Enter priority..." value={priority} onChange={this.handleChange} />
                </div>
                <div className="Form-section">
                    <input type="text" required name="item" placeholder="Enter text..." value={item} onChange={this.handleChange} />
                </div>
                <div className="Form-section">
                    <button type="submit">Add</button>
                </div>
            </form>
        )
    }
}
