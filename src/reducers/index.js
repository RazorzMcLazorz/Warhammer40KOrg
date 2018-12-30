// src/js/reducers/index.js
import { ADD_ARTICLE, CHANGE_STATE } from "./action-types";

const initialState = {
  x : 'hi',
};

// Sends Out the Props and Updates the props
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      state.articles.push(action.payload);
      return state;
    case CHANGE_STATE:
        const changedState = action.payload
        return {
            ...state,
            ...changedState
        }
    default:
      return state;
  }
};

export default rootReducer;