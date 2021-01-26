import React from 'react';
import PostListItem from '../post-list-item/post-list-item';

const   PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {
    const   elems = posts.map(item => {
        const   {id, ...itemProps} = item;

        return (
            <li key={id}>
                <PostListItem {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleImportant={() => onToggleImportant(id)}
                onToggleLiked={() => onToggleLiked(id)} />
            </li>
        );
    });

    return (
        <ul>
            {elems}
        </ul>
    );
};
export default PostList;