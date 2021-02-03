import React, {Component} from 'react';
import './post-list-item.scss';

export default class PostListItem extends Component {
    render() {
        const   {label, onDelete, onToggleImportant, onToggleLiked, important, liked} = this.props,
                classes = "btn btn-right";

        let     classI = important ? classes + " btn-important" : classes;
        let     classL = liked ? classes + " btn-like" : classes;
        return (
            <div className="posts__item">
                <span>
                    {label}
                </span>
                <button
                    className={classI}
                    type="button"
                    onClick={onToggleImportant}>
                    Important</button>
                <button
                    className={classL}
                    type="button"
                    onClick={onToggleLiked}>
                    Like</button>
                <button
                    className={classes}
                    type="button"
                    onClick={onDelete}>
                    Trash</button>
            </div>
        );
    }
};