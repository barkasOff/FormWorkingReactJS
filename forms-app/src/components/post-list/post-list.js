import React, {Component} from 'react';
import PostListItem from '../post-list-item/post-list-item';

const   PostList = ({posts}) => {
    const   elems = posts.map(item => {
        const   {id, ...itemProps} = item;

        return (
            <li key={id}>
                <PostListItem {...itemProps} />
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