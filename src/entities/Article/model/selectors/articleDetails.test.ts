import { StateSchema } from "app/providers/StoreProvider";
import {
  getArticleDetailsError,
  getArticleDetailsData,
  getArticleDetailsIsLoading,
} from "./articleDetails";

describe("getProfileData.test", () => {
  test("should return data", () => {
    const data = {
      id: "1",
      title: "subtitle",
    };
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        data,
      },
    };
    expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
  });
  test("should work with error", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined);
  });
  test("should return isLoading", () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        isLoading: true,
      },
    };
    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
  });
});
