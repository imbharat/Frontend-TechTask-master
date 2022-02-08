import React, { useCallback, useEffect, useState } from 'react';
import { debounceSearch } from '../../shared/helpers';
import { searchProducts } from '../../shared/api_requests';
import { Suggestion } from '../../shared/types';
import SearchErrorBoundary from './SearchErrorBoundary/SearchErrorBoundary';
import './Search.css';
import SearchItem from './SearchItem/SearchItem';

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
                if(suggestions)
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
                                <SearchErrorBoundary>
                                    <SearchItem suggestion={suggestion} key={idx} />
                                </SearchErrorBoundary>
                            )
                        })
                    }
                </div>
            }
        </div>
    );
}

export default Search;
