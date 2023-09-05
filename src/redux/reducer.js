import { ADD_FAVOURITE, REMOVE_FAVOURITE } from "./actions";


const initialState = {
  myFavorites: [],
};

const rootReducer = (state = initialState, {type, payload}) => {
  /**
   * Reducer.
   * @param {Object} State - the global object.
   */

  switch (type) {
    case ADD_FAVOURITE:
      return {
        ...state,
        myFavorites: [...state.myFavorites, payload],
      };
      case REMOVE_FAVOURITE:
        console.log(payload)
        return {
        ...state,
        myFavorites: [
          state.myFavorites.filter((e) => {
            e.id !== Number(payload);
          }),
        ],
      };
    default:
      return { ...state };

  }
};



export default rootReducer