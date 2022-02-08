import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import ProductList from './components/ProductList/ProductList';
import RenderData from './components/RenderData/RenderData';
import { Category } from '../src/shared/types';
import store from './redux/CartStore/CartStore';
import CartList from './components/Cart/CartList';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
          <Switch>
            <Route exact path='/' render={() => (
                <div className={'page'}>
                  <RenderData 
                    render={(categories: Category[]) => <Sidebar categories={categories} />}
                  />
                  <RenderData 
                    render={(categories: Category[]) => <ProductList categories={categories}/>}
                  />
                </div>
              )
            }/>
            <Route exact path='/cart' render={() => <CartList /> }/>
          </Switch>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
