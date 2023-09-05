export const ADD_FAVOURITE = "addFav";
export const REMOVE_FAVOURITE = "removeFav";


const addFav = (character) => {
  return { type: ADD_FAVOURITE, payload: character };
};

const removeFav = (id) => {
  return { type: REMOVE_FAVOURITE, payload: id };
};

export { addFav, removeFav };
