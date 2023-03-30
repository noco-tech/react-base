/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable arrow-body-style */
/* eslint-disable import/no-cycle */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faSquare } from '@fortawesome/free-solid-svg-icons';
import { createClip, deleteClip } from '../../flux/actions/ClipAction';

import { ClipContext } from '../../App';
import { Article } from '../../types';
import './ArticleCard.scss';

type Props = {
  article: Article;
};

const ArticleCard: React.FC<Props> = ({ article }) => {
  const { clipState, clipDispatch } = useContext(ClipContext);

  // すでにWebクリップされた記事かどうかを判定
  const isClipped = () => {
    return clipState.clipArticles.some(
      (clipArticle: Article) => clipArticle.url === article.url,
    );
  };

  // Webクリップをチェックした際の処理
  const handleClip = () => {
    if (isClipped()) {
      clipDispatch(deleteClip({ clipArticle: article }));
    } else {
      clipDispatch(createClip({ clipArticle: article }));
    }
  };

  return (
    <div className="card">
      {article.urlToImage ? (
        // <div
        //   className="image"
        //   style={{ backgroundImage: `url(${article.urlToImage})` }}
        // />
        <img src={article.urlToImage} className="image" alt="news image" />
      ) : (
        <img
          src="https://cdn.pixabay.com/photo/2021/09/02/16/48/cat-6593947_960_720.jpg"
          alt="no image"
          className="image"
        />
      )}

      <div className="title">
        <a href={article.url} target="_blank" rel="noopener noreferrer">
          {article.title.slice(0, 80)}...
        </a>
      </div>

      <div className="clip" onClick={handleClip}>
        後で読む
        <FontAwesomeIcon icon={isClipped() ? faCheckSquare : faSquare} />
      </div>
    </div>
  );
};

export default ArticleCard;
