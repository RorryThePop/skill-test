import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { articlesPageActions } from "pages/ArticlePage/model/slice/articlesPageSlice";
import { fetchArticlesList } from "pages/ArticlePage/model/services/fetchArticlesList/fetchArticlesList";
import { getArticlesPageInited } from "pages/ArticlePage/model/selectors/articlesPageSelectors";

export const initArticlesPage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>("articlesPage/initArticlesPage", async (_, thunkApi) => {
  const { getState, dispatch } = thunkApi;
  const inited = getArticlesPageInited(getState());
  if (!inited) {
    dispatch(articlesPageActions.initState());
    dispatch(
      fetchArticlesList({
        page: 1,
      }),
    );
  }
});
