/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import * as API from '../../services/api';

class Details extends Component {
  state = {
    show: null,
  };

  componentDidMount() {
    const { match } = this.props;
    this.serchExactShow(match.params.showID);
  }

  componentDidUpdate(prevProps) {
    const { match } = this.props;
    if (prevProps.match.params.showID !== match.params.showID) {
      this.serchExactShow(match.params.showID);
    }
  }

  serchExactShow = id => {
    API.searchExactShow(id).then(res => this.setState({ show: res.data }));
  };

  render() {
    const { show } = this.state;
    return <>{show && <img src={show.image.medium} alt={show.name} />}</>;
  }
}

export default Details;
