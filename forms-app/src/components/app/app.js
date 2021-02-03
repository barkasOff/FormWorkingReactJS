import React, {Component} from 'react';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form/post-add-from';
import './app.scss';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                    {label: "C# developmetnt", important: true, liked: false, id: 1},
                    {label: "React JS developmetnt", important: false, liked: false, id: 2},
                    {label: "Native JS developmetnt", important: false, liked: false, id: 3}
            ],
            findText: '',
            filter: 'all'
        };
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            const   index = data.findIndex(elem => elem.id === id),
                    newData = [...data.slice(0, index), ...data.slice(index + 1)];

            return {
                data: newData
            }
        });
    };
    addItem = (body) => {
        const   newElem = {label: body, important: true, id: ++this.maxId};
        this.setState(({data}) => {
            const   newData = [...data, newElem];

            return {
                data: newData
            }
        });
    };
    onToggleImportant = (id) => {
        this.setState(({data}) => {
            const   index = data.findIndex(elem => elem.id === id),
                    newElem = {...data[index], important: !data[index].important},
                    newData = [...data.slice(0, index), newElem, ...data.slice(index + 1)];

            return {
                data: newData
            }
        });
    };
    onToggleLiked = (id) => {
        this.setState(({data}) => {
            const   index = data.findIndex(elem => elem.id === id),
                    newElem = {...data[index], liked: !data[index].liked},
                    newData = [...data.slice(0, index), newElem, ...data.slice(index + 1)];

            return {
                data: newData
            }
        });
    };
    searchPosts = (items, findText) => {
        if (findText.length === 0) {
            return (items);
        }
        return items.filter(item => item.label.includes(findText));
    }
    filterPosts = (items, filter) => {
        if (filter === 'liked') {
            return (items.filter(item => item.liked));
        }
        return items;
    }
    onUpdateSearch = (findText) => {
        this.setState({findText});
    };
    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    render() {
        const   {data, findText, filter} = this.state,
                likedPosts = data.filter(post => post.liked).length,
                allPosts = data.length,
                visiblePost = this.filterPosts(this.searchPosts(data, findText), filter);

        return (
            <div className="container">
            <AppHeader
                liked={likedPosts}
                all={allPosts} />
                <div className="edit">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch} />
                    <PostStatusFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect} />
                </div>
                <PostList
                    posts={visiblePost}
                    onDelete={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked} />
                <PostAddForm
                    onAdd={this.addItem}/>
            </div>
        );
    }
}