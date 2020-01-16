/* eslint-disable import/no-cycle */
import React, { Component } from 'react';
import T from 'prop-types';
import * as API from '../../services/api';
import routes from '../../routes/routes';

class ShowDetailsPage extends Component {
  static propTypes = {
    match: T.shape({
      params: T.shape({
        showID: T.string,
      }),
    }).isRequired,
    history: T.shape({
      goBack: T.func,
      push: T.func,
    }).isRequired,
    location: T.shape({
      state: T.shape({
        from: T.shape({}),
      }),
    }).isRequired,
  };

  state = {
    show: null,
  };

  componentDidMount() {
    const { match } = this.props;
    API.searchExactShow(match.params.showID).then(res =>
      this.setState({ show: res.data }),
    );
  }

  goBack = () => {
    const { history, location } = this.props;
    if (location.state && location.state.from) {
      history.push({ ...location.state.from });
      return;
    }
    history.push(routes.SHOWS_PAGE.path);
  };

  render() {
    const { show } = this.state;
    return (
      <div>
        {show && (
          <>
            <button type="button" onClick={this.goBack}>
              Вернуться назад
            </button>
            <h2>{show.name}</h2>
            <img src={show.image.medium} alt={show.name} />
          </>
        )}
      </div>
    );
  }
}

export default ShowDetailsPage;
