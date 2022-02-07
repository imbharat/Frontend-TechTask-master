import React from 'react';
import { getProducts } from '../../shared/api_requests';
import { Category } from '../../shared/types';
import ArticleCard from '../ArticleCard/ArticleCard';
import './ProductList.css';

type Props = {
  categories: Category[]
}

type State = {
  categories: Category[],
  offset: number,
  loadMore: boolean
}

class ArticleList extends React.Component<Props> {
  state: State = {
    categories: this.props.categories,
    offset: 30,
    loadMore: true
  }

  componentDidUpdate(prevProps: Props) {
    if(prevProps !== this.props){
      const numOfProducts = this.numberOfProducts(this.props.categories)
      this.setState({
        categories: [...this.props.categories],
        offset: numOfProducts,
        loadMore: numOfProducts >= 30
      })
    }
  }

  numberOfProducts = (categories: Category[]): number => {
    return categories[0].categoryArticles.articles.length;
  }

  loadMore = () => {
    getProducts(this.state.offset).then(products => {
      const newProducts = products as Category[];
      const numOfProducts = this.numberOfProducts(newProducts)
      this.setState({
        categories: [...this.state.categories, ...newProducts],
        offset: this.state.offset + numOfProducts,
        loadMore: numOfProducts >= 30
      });
    })
  }

  render() {
    const articles = this.state.categories.map((category) => {
      return category.categoryArticles.articles.map((article, idx) => {
        return <ArticleCard article={article} key={article.name + idx} />;
      });
    });
    return (
      <div className={'content'}>
        {this.state.categories.length ? (
          <div>
            <h1>
              {this.state.categories[0].name}
              <small> ({this.state.categories[0].articleCount})</small>
            </h1>
            <div className='articles'>{articles}</div>
            <div className='loadMore'>
              {
                this.state.loadMore && <input 
                  data-testid = 'load-more'
                  type="button" onClick={this.loadMore} 
                  value='+ Mehr laden' 
                />
              }
            </div>
          </div>
        ) : (
          <div data-testid='loading' style={{height: '100vh'}}>Loading...</div>
        )}
      </div>
    );
  }
}

export default ArticleList;
