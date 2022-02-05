import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import ProductList from './components/ProductList/ProductList';
import RenderData from './components/RenderData/RenderData';
import { Category } from '../src/shared/types'

function App() {
  return (
    <div >
        <Header />
        <div className={'page'}>
          <RenderData 
            render={(categories: Category[]) => <Sidebar categories={categories} />}
          />
          <RenderData 
            render={(categories: Category[]) => <ProductList categories={categories}/>}
          />
        </div>
        <Footer />
    </div>
  );
}

export default App;
