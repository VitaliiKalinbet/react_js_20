/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';

const withLog = WrappedComponent => {
  return class WithLogHOC extends Component {
    componentDidMount() {
      console.group(`Logger ouput @${WrappedComponent.name}`);
      console.log(this.props);
      console.groupEnd();
    }

    componentDidUpdate() {
      console.group(`Logger ouput @${WrappedComponent.name}`);
      console.log(this.props);
      console.groupEnd();
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default withLog;
