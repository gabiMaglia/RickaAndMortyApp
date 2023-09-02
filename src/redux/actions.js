export const ADD_FAVOURITE = "addFav";
export const REMOVE_FAVOURITE = "removeFav";


const addFav = (id) => {
  return { type: ADD_FAVOURITE, payload: id };
};

const removeFav = (id) => {
  return { type: REMOVE_FAVOURITE, payload: id };
};

export { addFav, removeFav };
