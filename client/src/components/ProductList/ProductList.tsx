import React from 'react';
import { Category } from '../../shared/types';
import ArticleCard from '../ArticleCard/ArticleCard';
import './ProductList.css';

interface Props {
  categories: Category[]
}

class ArticleList extends React.Component<Props> {
  render() {
    const articles = this.props.categories.map((category) => {
      return category.categoryArticles.articles.map((article, idx) => {
        return <ArticleCard article={article} key={article.name + idx} />;
      });
    });

    return (
      <div className={'content'}>
        {this.props.categories.length ? (
          <h1>
            {this.props.categories[0].name}
            <small> ({this.props.categories[0].articleCount})</small>
          </h1>
        ) : (
          'Loading...'
        )}
        <div className={'articles'}>{articles}</div>
      </div>
    );
  }
}

export default ArticleList;
