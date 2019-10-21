import React from "react";
import box from "../Style/ArticleListItem.module.css";
import bton from "../Style/SlugButton.module.css";
import ArticleImage from "./ArticleImage";

class ArticleListItem extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className= {box.outBox}>


                <div className={box.articleImage}>
                    <ArticleImage image = {this.props.article.image} ></ArticleImage>
                </div>

                <div className={box.innerBox}>
                    <h2 className= {box.h2Style}>{this.props.article.title}</h2>
                    <p className={box.title}>{this.props.article.shortText}</p>
                    <time className= {box.timeStyle} dateTime={this.props.article.pubDate}>{this.props.article.pubDate}</time>
                     <div className={box.button}>
                    <button className= {bton.authorButton} onClick={() => {javaScript:alert(this.props.article.slug)}}>
                    {this.props.article.author}
                    </button>
                    </div>
                </div>
            </div>
        );
    }
}
export default ArticleListItem;

