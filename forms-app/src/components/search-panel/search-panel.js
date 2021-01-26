import React, {Component} from 'react';

export default class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            findText: ''
        };
    }

    onUpdateSearch = (e) => {
        const   findText = e.target.value;

        this.setState({findText});
        this.props.onUpdateSearch(findText);
    }

    render() {
        return <input
                    type="text"
                    placeholder="Поиск по записям"
                    onChange={this.onUpdateSearch} />;
    }
}