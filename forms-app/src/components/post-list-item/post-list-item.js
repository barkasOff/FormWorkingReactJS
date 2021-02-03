import React, {Component} from 'react';

export default class PostListItem extends Component {
    render() {
        const   {label, onDelete, onToggleImportant, onToggleLiked, important, liked} = this.props;

        let     textI = important ? "SuperStar" : "Star";
        let     textL = liked ? "SuperLike" : "Like";
        return (
            <div className="posts__item">
                <span>
                    {label}
                </span>
                <button
                    className="btn btn-right"
                    type="button"
                    onClick={onToggleImportant}>
                    {textI}</button>
                <button
                    className="btn btn-right"
                    type="button"
                    onClick={onDelete}>
                    Trash</button>
                <button
                    className="btn btn-right"
                    type="button"
                    onClick={onToggleLiked}>
                    {textL}</button>
            </div>
        );
    }
};