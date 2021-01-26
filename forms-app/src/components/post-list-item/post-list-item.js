import React, {Component} from 'react';

const   PostListItem = () => (
    <li>
        <span>
            Hello, world!
        </span>
        <div>
            <button type="button">Star</button>
            <button type="button">Trash</button>
        </div>
        <button type="button">Like</button>
    </li>
);
export default PostListItem;