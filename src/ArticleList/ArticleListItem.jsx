import React from "react";
import box from "../Style/ArticleListItem.module.css";
import bton from "../Style/SlugButton.module.css";

class ArticleListItem extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className= {box.outBox}>
                <h2 className= {box.h2Style}>{this.props.article.title}</h2>
                <p className={box.title}>{this.props.article.shortText}</p>
                <time className= {box.timeStyle} dateTime="2019-09-22">{this.props.article.pubDate}</time>
                <button className= {bton.authorButton} onClick={() => {javaScript:alert(this.props.article.slug)}}>
                    {this.props.article.author}
                </button>
            </div>
        );
    }
}
export default ArticleListItem;

