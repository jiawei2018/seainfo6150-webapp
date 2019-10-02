import React from "react";

class ArticleListItem extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <h2>{this.props.article.title}</h2>
                <p>{this.props.article.shortText}</p>
                <time>{this.props.article.pubDate}</time>
                <button onClick={() => {javaScript:alert(this.props.article.slug)}}>
                    show article slug
                </button>
            </div>
        );
    }
}
export default ArticleListItem;

