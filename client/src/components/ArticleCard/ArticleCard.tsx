import React from 'react';
import { useDispatch } from 'react-redux';
import { Article } from '../../shared/types';
import { formatter } from '../../shared/helpers';
import { updateCart } from '../../redux/CartStore/CartActions';
import { Product } from '../../redux/CartStore/Types';
import './ArticleCard.css';

function ArticleCard({ article, articleId }: { article: Article, articleId: string }) {

  const product: Product = {
    id: articleId,
    quantity: 1,
    details: {
      name: article.name,
      image: article.images[0].path,
      price: article.prices.regular.value
    }
  }

  const dispatch = useDispatch();
  
  return (
    <div className={'article'}>
      <img src={article.images[0].path} alt='Failed To Load Item'/>
      <div data-testid='article-name' className="articleName">{article.name}</div>
      <div>
        {formatter.format(article.prices.regular.value / 100)}
      </div>
      <input type="button" value="Add to cart" onClick={() => dispatch(updateCart(product))}/>
    </div>
  );
}

export default React.memo(ArticleCard);
