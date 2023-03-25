/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable import/no-cycle */
/* eslint-disable import/order */
import React, { useReducer, createContext } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import HomePage from './pages/home/HomePage';
import ClipPage from './pages/clip/ClipPage';

import { clipReducer } from './flux/reducers/ClipReducer';
import { ClipContextType } from './types';
import './App.scss';

export const ClipContext = createContext({} as ClipContextType);

const App = () => {
  const [state, dispatch] = useReducer(clipReducer, { clipArticles: [] });

  return (
    // 子コンポーネントでWebクリップ用のstateとdispatchを共有できるように設定
    //
    <ClipContext.Provider value={{ clipState: state, clipDispatch: dispatch }}>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/clip" component={ClipPage} />
        </Switch>
      </div>
    </ClipContext.Provider>
  );
};

export default App;
