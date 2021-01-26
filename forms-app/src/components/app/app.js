import React, {Component} from 'react';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form/post-add-from';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                    {label: "C# developmetnt", important: true, liked: false, id: "1asdasd3"},
                    {label: "React JS developmetnt", important: false, liked: false, id: "12fasgsfg3"},
                    {label: "Native JS developmetnt", important: false, liked: false, id: "12adfhd5w3"}
            ]
        };
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            const   index = data.findIndex(elem => elem.id === id),
                    newData = [...data.slice(0, index), ...data.slice(index + 1)];

            return {
                data: newData
            }
        });
    }
    addItem = (body) => {
        const   newElem = {label: body, important: true, id: "dsfsdfsd"};
        this.setState(({data}) => {
            const   newData = [...data, newElem];

            return {
                data: newData
            }
        });
    }
    onToggleImportant = (id) => {
        this.setState(({data}) => {
            const   index = data.findIndex(elem => elem.id === id),
                    newElem = {...data[index], important: !data[index].important},
                    newData = [...data.slice(0, index), newElem, ...data.slice(index + 1)];

            return {
                data: newData
            }
        });
    }
    onToggleLiked = (id) => {
        this.setState(({data}) => {
            const   index = data.findIndex(elem => elem.id === id),
                    newElem = {...data[index], liked: !data[index].liked},
                    newData = [...data.slice(0, index), newElem, ...data.slice(index + 1)];

            return {
                data: newData
            }
        });
    }

    render() {
        const   {data} = this.state,
                likedPosts = data.filter(post => post.liked).length,
                allPosts = data.length;

        return (
            <div>
                <AppHeader
                    liked={likedPosts}
                    all={allPosts} />
                <SearchPanel/>
                <PostStatusFilter/>
                <PostList
                    posts={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked} />
                <PostAddForm
                    onAdd={this.addItem}/>
            </div>
        );
    }
}