import { ProfileScheme } from "entities/Profile";
import { profileActions, profileReducer } from "./profileSlice";

describe("profileSlice.test", () => {
  test("test set readonly", () => {
    const state: DeepPartial<ProfileScheme> = { readonly: false };
    expect(
      profileReducer(state as ProfileScheme, profileActions.setReadonly(true)),
    ).toEqual({
      readonly: true,
    });
  });
});
