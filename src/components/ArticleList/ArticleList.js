import React from 'react';
import T from 'prop-types';
import ArticleListItem from '../ArticleListItem/ArticleListItem';
import withLog from '../../hoc/withLog';

const ArticleList = ({ items }) => {
  return (
    <ul style={{ display: 'flex', flexDirection: 'column' }}>
      {items.map(el => (
        <ArticleListItem
          key={el.objectID}
          objectID={el.objectID}
          url={el.url}
          title={el.title}
        />
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

export default withLog(ArticleList);
