/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import * as API from '../../services/api';
import Details from '../../components/Details/Details';

class ShowsPage extends Component {
  state = {
    shows: [],
  };

  componentDidMount() {
    this.serch();
  }

  serch = query => {
    API.searchShows(query).then(res => this.setState({ shows: res.data }));
  };

  render() {
    const { shows } = this.state;
    const { match } = this.props;
    return (
      <div>
        <ul>
          {shows.map(el => (
            <li key={el.show.id}>
              <Link to={`${match.url}/${el.show.id}`}>{el.show.name}</Link>
            </li>
          ))}
        </ul>

        <Route path={`${match.path}/:showID`} component={Details} />
      </div>
    );
  }
}

export default ShowsPage;
