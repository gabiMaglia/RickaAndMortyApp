import { ADD_FAVORITE, REMOVE_FAVORITE, CLEAR_FAVORITE } from "./actions";

const initialState = {
  myFavorites: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  /**
   * Reducer.
   * @param {Object} State - the global object.
   */

  switch (type) {
    case ADD_FAVORITE:
      return {
        ...state,
        myFavorites: [...state.myFavorites, payload],
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (char) => char.id !== Number(payload)
        ),
      };
    case CLEAR_FAVORITE:
      return {
        ...state,
        myFavorites: [],
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
