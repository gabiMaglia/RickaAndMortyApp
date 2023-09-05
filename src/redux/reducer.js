import { ADD_FAVOURITE, REMOVE_FAVOURITE } from "./actions";


const initialState = {
  myFavourites: [],
};

export  const rootReducer = (state = initialState, action) => {
  /**
   * Reducer.
   * @param {Object} State - the global object.
   */

  switch (action.type) {
    case ADD_FAVOURITE:
      return {
        ...state,
        myFavourites: [...state.myFavourites, newCard],
      };
    case REMOVE_FAVOURITE:
      return {
        ...state,
        myFavourites: [
          state.myFavourites.filter((e) => {
            e.id !== Number(action.payload);
          }),
        ],
      };
    default:
      return {...state} ;
     
  }
};
