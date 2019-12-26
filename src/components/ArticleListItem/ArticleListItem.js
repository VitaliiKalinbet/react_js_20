import React from 'react';
import T from 'prop-types';
import withToogle from '../../hoc/withToogle';

const ArticleListItem = ({ url, title }) => {
  return (
    <li>
      <a href={url}>{title}</a>
    </li>
  );
};

ArticleListItem.defaultProps = {
  url: '',
  title: '',
};

ArticleListItem.propTypes = {
  url: T.string,
  title: T.string,
};

export default withToogle(ArticleListItem);
