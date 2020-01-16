/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import T from 'prop-types';
import qs from 'query-string';
import * as API from '../../services/api';
// import Details from '../../components/Details/Details';
import SearchBar from '../../components/SearchBar/SearchBar';

class ShowsPage extends Component {
  static propTypes = {
    history: T.shape({
      push: T.func,
    }).isRequired,
    location: T.shape({
      search: T.string,
    }).isRequired,
  };

  state = {
    shows: [],
  };

  componentDidMount() {
    const { location } = this.props;
    // if (location.search) {
    //   const searchParams = new URLSearchParams(location.search).get('search');
    //   this.search(searchParams);
    // }

    if (location.search) {
      const searchParams = qs.parse(location.search).search;
      this.search(searchParams);
    }
  }

  search = query => {
    API.searchShows(query).then(res => this.setState({ shows: res.data }));
    const { history } = this.props;
    history.push({
      ...this.props.location,
      search: `search=${query}`,
    });
  };

  render() {
    const { shows } = this.state;
    const { match, location } = this.props;
    return (
      <div>
        <SearchBar onSubmit={this.search} />
        <ul>
          {shows.map(el => (
            <li key={el.show.id}>
              <Link
                to={{
                  pathname: `${match.url}/${el.show.id}`,
                  state: { from: { ...location } },
                  search: `show=${el.show.name}`,
                }}
              >
                {el.show.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* пример вложенной навигации в приложении  */}
        {/* <Route path={`${match.path}/:showID`} component={Details} /> */}
      </div>
    );
  }
}

export default ShowsPage;
