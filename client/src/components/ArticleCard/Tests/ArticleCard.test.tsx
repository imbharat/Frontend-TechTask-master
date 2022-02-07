import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import ArticleCard from '../ArticleCard';
import { article } from './ArticleCardTestData'

describe("ArticleCard", () => {
    //snapshot test
    test('Article renders', () => {
        //arrange
        const data = article;
        //act
        const tree = renderer.create(<ArticleCard article={data}/>).toJSON();
        //assert
        expect(tree).toMatchSnapshot();
    });

    test('Article name exists', () => {
        //arrange
        const data = article
        //act
        render(<ArticleCard article={data}/>);
        const articleName = screen.queryByTestId('article-name')?.textContent;
        //assert
        expect(data.name).toEqual(articleName);
    });
})