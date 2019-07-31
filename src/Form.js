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

    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const {priority, item} = this.state;

        return (
            <form className="Form-add">
                <div className="Form-section">
                    <label>Priority:</label>
                    <input type="text" name="priority" value={priority} onChange={this.handleChange} />
                </div>
                <div className="Form-section">
                    <label>Item:</label>
                    <input type="text" name="item" value={item} onChange={this.handleChange} />
                </div>
                <div className="Form-section">
                    <button type="button" onClick={this.submitForm}>Add</button>
                </div>
            </form>
        )
    }
}
