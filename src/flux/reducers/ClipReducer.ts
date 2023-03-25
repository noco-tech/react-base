/* eslint-disable import/prefer-default-export */
import { ClipStateType, ClipActionType } from '../../types';

// Webクリップの追加と削除を制御するReducer
export const clipReducer = (state: ClipStateType, action: ClipActionType) => {
  switch (action.type) {
    case 'CREATE_CLIP':
      return {
        ...state,
        clipArticles: [...state.clipArticles, action.article],
      };
    case 'DELETE_CLIP':
      return {
        ...state,
        clipArticles: state.clipArticles.filter(
          (clipArticle) => clipArticle.url !== action.article.url,
        ),
      };
    default:
      return state;
  }
};
