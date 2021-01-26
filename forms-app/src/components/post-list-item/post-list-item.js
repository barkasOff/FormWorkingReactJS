import React, {Component} from 'react';

export default class PostListItem extends Component {
    constructor (props) {
        super(props);
        this.state = {
            important: false,
            like: false
        };
    }

    onImportant = () => {
        this.setState(({important}) => ({
            important: !important
        }));
    };
    onLike = () => {
        this.setState(({like}) => ({
            like: !like
        }));
    };

    render() {
        const   {label, onDelete} = this.props;
        const   {important, like} = this.state;

        let     textI = important ? "SuperStar" : "Start";
        let     textL = like ? "SuperLike" : "Like";
        return (
            <div>
                <span>
                    {label}
                </span>
                <div>
                    <button
                        type="button"
                        onClick={this.onImportant}>
                        {textI}</button>
                    <button
                        type="button"
                        onClick={onDelete}>
                        Trash</button>
                </div>
                <button
                    type="button"
                    onClick={this.onLike}>
                    {textL}</button>
            </div>
        );
    }
};