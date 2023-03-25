export type Article = {
  source: { id: string; name: string };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

export type Articles = Article[];

export type ClipStateType = {
  clipArticles: Articles;
};

// export type ClipActionType =
//   | { type: 'CREATE_CLIP'; article: Article }
//   | { type: 'DELETE_CLIP'; article: Article }

export type ClipActionType = { type: string; article: Article };

export type ClipContextType = {
  clipState: ClipStateType;
  clipDispatch: React.Dispatch<ClipActionType>;
};

export type HandleCategoryContextType = {
  category: string;
  handleCategory: (param: string) => void;
};
