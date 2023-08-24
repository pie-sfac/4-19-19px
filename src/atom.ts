import { atom } from "recoil";

export const isCommentState = atom<{
  isLoading: boolean;
  isOk: boolean | null;
}>({
  key: "isCommentState",
  default: { isLoading: true, isOk: null },
});

export const isIncorrectAtom = atom<boolean>({
  key: "isIncorrect",
  default: false,
});
