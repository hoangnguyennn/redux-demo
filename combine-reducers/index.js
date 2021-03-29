const { createStore, combineReducers } = require('redux');

const initProductState = {
  items: []
};

const productReducer = (state = initProductState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const initCartState = {
  items: [],
  total: 0
};

const cartReducer = (state = initCartState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer
});

const store = createStore(rootReducer);
console.log(store.getState());
