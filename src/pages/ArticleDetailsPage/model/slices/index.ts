import { combineReducers } from "@reduxjs/toolkit";
// eslint-disable-next-line max-len
import { articleDetailsPageRecommendationsReducer } from "pages/ArticleDetailsPage/model/slices/articleDetailsPageRecommendationsSlice";
import { articleDetailsCommentsReducer } from "pages/ArticleDetailsPage/model/slices/articleDetailsCommentsSlice";
import { ArticleDetailsPageSchema } from "../types";

export const articleDetailsPageReduce =
  combineReducers<ArticleDetailsPageSchema>({
    recommendations: articleDetailsPageRecommendationsReducer,
    comments: articleDetailsCommentsReducer,
  });
