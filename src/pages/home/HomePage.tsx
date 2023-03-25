/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import ArticleList from '../../components/ArticleList/ArticleList';

import Category from '../../components/Category/Category';
import { categories } from '../../categoryList';
import { HandleCategoryContextType } from '../../types';

import './HomePage.scss';

interface EnvType {
  REACT_APP_NEWS_API_KEY: string;
}

export const handleCategoryContext = createContext(
  {} as HandleCategoryContextType,
);

const HomePage = () => {
  const [category, setCategory] = useState(categories[0]);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = React.useState<unknown>('');

  useEffect(() => {
    // News APIから特定カテゴリーのニュースデータを取得
    const fetchArticles = async () => {
      try {
        setLoading(true);

        const env = process.env as unknown as EnvType;
        const apiKey = env.REACT_APP_NEWS_API_KEY;

        // @typescript-eslint/restrict-template-expressions
        const URL = `http://newsapi.org/v2/top-headlines?country=jp&category=${category}&apiKey=${apiKey}`;

        const res = await axios.get(URL);
        setArticles(res.data.articles);

        // テスト用にローカルに保存したNewsデータを利用する場合は、下3行のコメントを外し上3行をコメントアウト
        // let data = JSON.stringify(news);
        // data = JSON.parse(data);
        // setArticles(data.articles);
        setLoading(false);
      } catch (err: unknown) {
        setLoading(false);
        setError(err);
        console.error(err);
      }
    };

    fetchArticles();
  }, [category]);

  return (
    <div className="home-page">
      {/* 子コンポーネントにカテゴリー情報とコールバック関数を渡すためにコンテキストを利用 */}
      <handleCategoryContext.Provider
        // eslint-disable-next-line react/jsx-no-constructed-context-values
        value={{
          category,
          handleCategory: (children) => setCategory(children),
        }}
      >
        <Category />
      </handleCategoryContext.Provider>

      {loading ? (
        <h1>
          <FontAwesomeIcon icon={faSpinner} />
          データ取得中...
        </h1>
      ) : !error ? (
        <ArticleList articles={articles} />
      ) : (
        <h1>データを取得できませんでした。</h1>
      )}
    </div>
  );
};

export default HomePage;
