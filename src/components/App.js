import React, { Component } from 'react';
import * as API from '../services/api';
import ArticleList from './ArticleList/ArticleList';
import SearchBar from './SearchBar/SearchBar';
import Loader from './Loader/Loader';

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
        <SearchBar onSubmit={this.onSubmitSerchBar} />
        <ArticleList items={items} />
        <button onClick={this.onClickMore} type="button">
          Load more
        </button>
      </>
    );
  }
}

export default App;
