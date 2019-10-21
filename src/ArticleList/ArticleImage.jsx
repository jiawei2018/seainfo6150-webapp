import React from "react";
import PropTypes from 'prop-types'

import ArticleListItem from './ArticleListItem.jsx'

import box from "../Style/ArticleListItem.module.css";
// import ArticleImage from "./ArticleListItem";
import aImage from "../Style/ArticleImage.module.css";


class ArticleImage extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <img src = {this.props.image._url} className={aImage.image} />
            </div>
        );
    }
}
export default ArticleImage;