import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import ArticleCard from '../ArticleCard';
import { article } from './ArticleCardTestData';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch
}));

describe("ArticleCard", () => {
    //snapshot test
    test('Article renders', () => {
        //arrange
        const data = article;
        //act
        const tree = renderer.create(<ArticleCard article={data} articleId={data.name + 0}/>).toJSON();
        //assert
        expect(tree).toMatchSnapshot();
    });

    test('Article name exists', () => {
        //arrange
        const data = article
        //act
        render(<ArticleCard article={data} articleId={data.name + 0}/>);
        const articleName = screen.queryByTestId('article-name')?.textContent;
        //assert
        expect(data.name).toEqual(articleName);
    });
})