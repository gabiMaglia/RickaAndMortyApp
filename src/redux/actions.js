export const ADD_FAVORITE = "addFav";
export const REMOVE_FAVORITE = "removeFav";
export const CLEAR_FAVORITE = "clearFav";

const addFav = (character) => {
  return { type: ADD_FAVORITE, payload: character };
};

const removeFav = (id) => {
  return { type: REMOVE_FAVORITE, payload: id };
};
const clearFav = () => {
  return { type: CLEAR_FAVORITE };
};

export { addFav, removeFav, clearFav };
