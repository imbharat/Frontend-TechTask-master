import { render, screen } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';
import { Category } from '../../../shared/types';
import ProductList from '../ProductList';
import { APIData } from './ProductListTestData';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch
}));

describe("ProductList", () => {
  test('renders the ProductList', () => {
    //arrange
    const data: Category[] = APIData.categories;
    //act
    const tree = renderer.create(<ProductList categories={data}/>).toJSON();
    //assert
    expect(tree).toMatchSnapshot();
  });

  test('Loading... displayed when data is loading', () => {
    //arrange
    const data: Category[] = [];
    //act
    render(<ProductList categories={data}/>);
    const loading = screen.queryByTestId('loading')?.textContent;
    //assert
    expect(loading).toEqual('Loading...');
  });

  test('Loading... is not displayed when data successfully loads', () => {
    //arrange
    const data: Category[] = APIData.categories;
    //act
    render(<ProductList categories={data}/>);
    const loading = screen.queryByTestId('loading');
    //assert
    expect(loading).toBeNull();
  });

  test('Load More is displayed when more data can be loaded', () => {
    //arrange
    const data: Category[] = APIData.categories;
    //act
    render(<ProductList categories={data}/>);
    const loadMore = screen.queryByTestId('load-more');
    //assert
    expect(loadMore).toBeInTheDocument();
  });
})
