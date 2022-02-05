import React from 'react';
import { render } from '@testing-library/react';
import ProductList from '../ProductList';
import { APIData } from './ProductListTestData'

test('renders the ProductList', () => {
  
  const { getByText } = render(<ProductList categories={APIData.categories}/>);
  const linkElement = getByText(/home24/i);
  expect(linkElement).toBeInTheDocument();
});
