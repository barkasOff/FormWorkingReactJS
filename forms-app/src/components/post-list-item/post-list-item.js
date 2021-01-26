import React, {Component} from 'react';

export default class PostListItem extends Component {
    render() {
        const   {label, onDelete, onToggleImportant, onToggleLiked, important, liked} = this.props;

        let     textI = important ? "SuperStar" : "Star";
        let     textL = liked ? "SuperLike" : "Like";
        return (
            <div>
                <span>
                    {label}
                </span>
                <div>
                    <button
                        type="button"
                        onClick={onToggleImportant}>
                        {textI}</button>
                    <button
                        type="button"
                        onClick={onDelete}>
                        Trash</button>
                </div>
                <button
                    type="button"
                    onClick={onToggleLiked}>
                    {textL}</button>
            </div>
        );
    }
};