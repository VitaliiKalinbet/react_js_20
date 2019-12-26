import React, { Component } from 'react';
import * as API from '../services/api';
import ArticleList from './ArticleList/ArticleList';
import SearchBar from './SearchBar/SearchBar';
import Loader from './Loader/Loader';
import Toggle from '../renderProp/toggle';

class App extends Component {
  state = {
    items: [],
    isLoading: false,
    searchQuery: 'css',
    pageNumber: 1,
  };

  componentDidMount() {
    const { searchQuery, pageNumber } = this.state;
    this.onSearch(searchQuery, pageNumber);
  }

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery, pageNumber } = this.state;
    if (
      prevState.searchQuery !== searchQuery ||
      prevState.pageNumber !== pageNumber
    ) {
      this.onSearch(searchQuery, pageNumber);
    }
  }

  onSearch = (query, pageNumber) => {
    this.setState({ isLoading: true });
    API.getItems(query, pageNumber)
      .then(res =>
        this.setState(prevState => ({
          items: [...prevState.items, ...res.data.hits],
        })),
      )
      .catch(err => {
        throw new Error(err);
      })
      .finally(() => this.setState({ isLoading: false }));
  };

  onSubmitSerchBar = text => {
    this.setState({ searchQuery: text, items: [], pageNumber: 1 });
  };

  onClickMore = () => {
    this.setState(prevState => ({
      pageNumber: prevState.pageNumber + 1,
    }));
  };

  render() {
    const { items, isLoading } = this.state;
    return (
      <>
        {isLoading && <Loader />}

        {/* Render prop, best example */}
        <Toggle>
          {({ isOpen, toggle }) => (
            <div>
              <button type="button" onClick={toggle}>
                {isOpen ? 'Hide' : 'Show'}
              </button>
              {isOpen && <SearchBar onSubmit={this.onSubmitSerchBar} />}
            </div>
          )}
        </Toggle>

        {/* Render prop, another example */}
        {/* <Toggle
          render={({ isOpen, toggle }) => (
            <div>
              <button type="button" onClick={toggle}>
                {isOpen ? 'Hide' : 'Show'}
              </button>
              {isOpen && <SearchBar onSubmit={this.onSubmitSerchBar} />}
            </div>
          )}
        /> */}

        <ArticleList items={items} />
        <button onClick={this.onClickMore} type="button">
          Load more
        </button>
      </>
    );
  }
}

export default App;
