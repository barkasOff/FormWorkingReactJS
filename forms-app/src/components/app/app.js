import React, {Component} from 'react';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form/post-add-from';

const   App = () => (
    <div>
        <AppHeader/>
        <SearchPanel/>
        <PostStatusFilter/>
        <PostList/>
        <PostAddForm/>
    </div>
);
export default App;