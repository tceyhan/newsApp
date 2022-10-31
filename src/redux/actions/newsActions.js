import { SET_NEWS_LIST, CLEAR_NEWS_LIST } from "../types/newsTypes";

export const setNewsList = (payload) => ({
  type: SET_NEWS_LIST,
  payload: payload,
});
export const clearNewsList = () => ({
  type: CLEAR_NEWS_LIST,
});



// rxaction snippet used for actions
// 