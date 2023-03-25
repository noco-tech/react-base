/* eslint-disable arrow-body-style */
import { Article } from '../../types';

// Webクリップの追加アクション
export const createClip = ({ clipArticle }: { clipArticle: Article }) => {
  return { type: 'CREATE_CLIP', article: clipArticle };
};

// Webクリップの削除アクション
export const deleteClip = ({ clipArticle }: { clipArticle: Article }) => {
  return { type: 'DELETE_CLIP', article: clipArticle };
};
