/* eslint-disable import/no-cycle */
/* eslint-disable arrow-body-style */
import React, { FC } from 'react';

import ArticleCard from '../ArticleCard/ArticleCard';
import { Articles, Article } from '../../types';
import './ArticleList.scss';

type Props = {
  articles: Articles;
};

const ArticleList: FC<Props> = ({ articles }) => {
  return (
    <div className="article-list">
      {articles.map((article: Article) => (
        <ArticleCard key={article.url} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
