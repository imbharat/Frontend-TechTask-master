import React from 'react';
import { Suggestion } from '../../../shared/types';

function SearchItem({suggestion} : {suggestion: Suggestion}) {
  return (
    <div className='suggestion'>
        <div><img src={suggestion.image} alt=''/></div>
        <div>{suggestion.name}</div>
        <div style={{
            fontSize: '0.8rem',
            color: 'grey'
        }}>{suggestion.count} Produkte</div>
    </div>
  );
}

export default SearchItem;
