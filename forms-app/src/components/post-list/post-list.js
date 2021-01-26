import React, {Component} from 'react';
import PostListItem from '../post-list-item/post-list-item';

const   PostList = ({posts, onDelete}) => {
    const   elems = posts.map(item => {
        const   {id, ...itemProps} = item;

        return (
            <li key={id}>
                <PostListItem {...itemProps}
                onDelete={() => onDelete(id)} />
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