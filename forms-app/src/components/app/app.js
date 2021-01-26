import React, {Component} from 'react';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form/post-add-from';

const   App = () => {
    const   data = [
        {label: "C# developmetnt", important: true, id: "1asdasd3"},
        {label: "React JS developmetnt", important: false, id: "12fasgsfg3"},
        {label: "Native JS developmetnt", important: false, id: "12adfhd5w3"}
    ];
    return (
        <div>
            <AppHeader/>
            <SearchPanel/>
            <PostStatusFilter/>
            <PostList posts={data}/>
            <PostAddForm/>
        </div>
    );
}
export default App;