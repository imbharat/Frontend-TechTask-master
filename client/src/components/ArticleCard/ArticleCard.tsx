import React from 'react';
import { Article } from '../../shared/types';
import { formatter } from '../../shared/helpers';
// import AddToCart from '../../assets/AddToCart.png'
import './ArticleCard.css';

function ArticleCard({ article }: { article: Article }) {
  return (
    <div className={'article'}>
      <img src={article.images[0].path} alt='Failed To Load Item'/>
      <div className="articleName">{article.name}</div>
      <div>
        {formatter.format(article.prices.regular.value / 100)}
        {/* <img className='addToCart' src={AddToCart}/> */}
      </div>
      <input type="button" value="Add to cart"/>
    </div>
  );
}

export default ArticleCard;
