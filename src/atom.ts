import { atom } from "recoil";

export const isCommentState = atom<{
  isLoading: boolean;
  isOk: boolean | null;
}>({
  key: "isCommentState",
  default: { isLoading: true, isOk: null },
});
