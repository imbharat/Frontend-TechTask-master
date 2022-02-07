import React, { useCallback, useEffect, useState } from 'react';
import { debounceSearch } from '../../shared/helpers';
import { searchProducts } from '../../shared/api_requests';
import { Suggestion } from '../../shared/types';
import './Search.css';

function Search() {
    const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
    const [queryString, setQueryString] = useState('');
    const [keywords, setKeywords] = useState('');
    const [firstRender, setFirstRender] = useState(true);
    
    const debounceQueryString = useCallback(debounceSearch(setQueryString, 500), []);

    const updateKeywords = (value: string) => {
        if(value.length < 2){
            setSuggestions([]);
        }
        setKeywords(value);
        debounceQueryString(value);
    }
    
    useEffect(() => {
        if(!firstRender && queryString.length > 1) {
            searchProducts(queryString).then((suggestions) => {
                setSuggestions(suggestions as Suggestion[]);
            });
        }
        else {
            setFirstRender(false);
        }
        return () => {}
    }, [queryString, firstRender])
    
    return (
        <div className='search'>
            <input 
                placeholder='Lieblingsprodukte finden…'
                onChange={(e) => updateKeywords(e.target.value)}
                value={keywords}
            />
            {
                suggestions.length > 0 && <div className='suggestionsList'>
                    {
                        suggestions.map((suggestion, idx) =>  {
                            return (
                                <div className='suggestion' key={suggestion.name + idx}>
                                    <div><img src={suggestion.image} alt=''/></div>
                                    <div>{suggestion.name}</div>
                                    <div style={{
                                        fontSize: '0.8rem',
                                        color: 'grey'
                                    }}>{suggestion.count} Produkte</div>
                                </div>
                            )
                        })
                    }
                </div>
            }
        </div>
    );
}

export default Search;
