import React from 'react';
import { Category } from '../../shared/types'
import './Sidebar.css';

function Sidebar({ categories } : { categories: Category[] }) {
  return (
    <div className={'sidebar'}>
    <h3>Kategorien</h3>
        {categories.length ? (
        <ul>
            {categories[0].childrenCategories.map(({ name, urlPath }, idx) => {
                return (
                    <li key={name + idx}>
                        <a href={`/${urlPath}`}>{name}</a>
                    </li>
                );
            })}
        </ul>
        ) : (
        'Loading...'
        )}
    </div>
  );
}

export default Sidebar;
