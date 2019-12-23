import React from 'react';
import T from 'prop-types';

const ArticleList = ({ items }) => {
  return (
    <ul>
      {items.map(el => (
        <li key={el.objectID}>
          <a href={el.url}>{el.title}</a>
        </li>
      ))}
    </ul>
  );
};

ArticleList.defaultProps = {
  items: [],
};

ArticleList.propTypes = {
  items: T.arrayOf(T.shape({})),
};

export default ArticleList;
