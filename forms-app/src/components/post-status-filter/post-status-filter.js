import React, {Component} from 'react';
import './post-status-filter.scss';

export default class PostStatusFilter extends Component {
    constructor(props) {
        super(props);
        this.buttons = [
            {name: 'all', label: 'Все'},
            {name: 'liked', label: 'Понравилось'}
        ];
    }

    render() {
        let     classes = "btn";
        const   {onFilterSelect} = this.props,
                buttons = this.buttons.map(({name, label}) => {
                    if (name === 'liked') {
                        classes += ' btn-positive';
                    }
                    return (
                        <button
                            className={classes}
                            key={name}
                            onClick={() => onFilterSelect(name)}>
                            {label}</button>
                    );
                });

        return <div className="psf__btns">{buttons}</div>;
    }
}