import React, {Component} from 'react';

export default class PostStatusFilter extends Component {
    constructor(props) {
        super(props);
        this.buttons = [
            {name: 'all', label: 'Все'},
            {name: 'liked', label: 'Понравилось'}
        ];
    }

    render() {
        const   {onFilterSelect} = this.props,
                buttons = this.buttons.map(({name, label}) => {
            return (
                <button
                    key={name}
                    onClick={() => onFilterSelect(name)}>
                    {label}</button>
            );
        });

        return <div>{buttons}</div>;
    }
}