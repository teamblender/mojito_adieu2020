import { createStore } from "redux";

export default createStore(function (state, action) {
  switch (action.type) {
    case "stage":
      return { ...state, stage: action.stage };
    case "emoji":
      return { ...state, emoji: action.emoji };
    case "recent":
      return { ...state, recent: action.recent };
    default:
      return state;
  }
});
