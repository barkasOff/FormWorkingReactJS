import React from 'react';
import PostListItem from '../post-list-item/post-list-item';
import './post-list.scss';

const   PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {
    const   elems = posts.map(item => {
        const   {id, ...itemProps} = item;

        return (
            <div
                key={id}>
                <PostListItem {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleImportant={() => onToggleImportant(id)}
                onToggleLiked={() => onToggleLiked(id)} />
            </div>
        );
    });

    return (
        <div className="posts">
            {elems}
        </div>
    );
};
export default PostList;