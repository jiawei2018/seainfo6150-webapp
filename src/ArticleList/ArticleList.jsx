import React from "react";
import PropTypes from 'prop-types'
import articles from '../data/articles.json'
import ArticleListItem from './ArticleListItem.jsx'

const ArticleList = props => {
  return (
    <ul>
      {props.articles.map(article => (
        <li key={articles}> {<ArticleListItem article = {article}></ArticleListItem>}  </li>
      ))}
    </ul>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired
};
export default ArticleList;
