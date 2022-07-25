const watchlistReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_LIST": {
      const product = action.payload;
      const id = product.id;

      const newState = { ...state };
      newState[id] = product;

      return newState;
    }
    case "REMOVE_FROM_LIST": {
      const product = action.payload;
      const id = product.id;

      const newState = { ...state };
      delete newState[id];
      return newState;
    }
    default:
      throw new Error();
  }
};

export default watchlistReducer;
