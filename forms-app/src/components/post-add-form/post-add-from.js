import React, {Component} from 'react';
import './post-add-form.scss';

export default class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    onValueChanged = (e) => {
        this.setState({
            text: e.target.value
        });
    };
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.text);
        this.setState({
            text: ''
        });
    }

    render() {
        return (
            <form
                className="add-form"
                onSubmit={this.onSubmit}>
                <input
                    className="text"
                    type="text"
                    placeholder="О чем вы думаете сейчас?"
                    onChange={this.onValueChanged}
                    value={this.state.text} />
                <button
                    className="btn btn-positive"
                    type="submit">
                    Добавить</button>
            </form>
        );
    }
}