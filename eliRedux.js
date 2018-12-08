const initialToDoState = {
  toDos: [],
};

const ADDTODO = ('Buy Food') => {
  type: 'ADD_TODO',
  toDo: 'Buy Food',
};

const store = Redux.createStore(toDoReducer, initialToDoState);


toDoReducer = (state = initialToDoState, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      // spread the current state and toDos array to save prior changes
      // add the new toDo to the toDos array
      return {
        ...state,
        toDos: [
          // spread the array as it's nested
          ...state.toDos,
          action.toDo,
        ],
      };

    // default catch in case an action doesn't exist
    // this will return the initialState
    default:
      return state;
  };
};




const initialBodega= {
  insideBodega: false,
  choppedCheese: 10,
  catMood: "Neutral",
};

const ENTER = {
  type: 'ENTER_BODEGA',
};

const BUYFOOD = {
  type: 'BUY_CHOPPED_CHEESE',
  buy: 1,
};

const PETCAT = {
  type: 'PET_BODEGA_CAT',
};

const LEAVE = {
  type: 'LEAVE_BODEGA',
};


const store = Redux.createStore(bodegaReducer, initialBodegaState);

// this reducer takes in the initial state and the action called
bodegaReducer = (state = initialBodegaState, action) => {
  // the below switch case decides what to do based on the action
  switch(action.type) {
    // since 'ENTER_BODEGA' is called
    // insideBodega is toggled to be true
    case 'ENTER_BODEGA':
      return {
        ...state,
        insideBodega: true,
      };

    // when food is brought, we alter the state/quantity of this key/value pair
    case 'BUY_CHOPPED_CHEESE':
      return {
        ...state,
        choppedCheese: Math.max(0, state.bananas - action.buy),
      };

    // once more, we alter the state, but this time a string datatype
    case 'PET_BODEGA_CAT':
      return {
        ...state,
        catMood: "Happy",
      };

    // lastly we toggle the insideBodega value as we leave
    case 'LEAVE_BODEGA':
      return {
        ...state,
        insideBodega: false,
      };

    // default catch in case an action doesn't exist
    // this will return the initialState
    default:
      return state;
  };
};

const stateListener = () => {
  const currentBodegaState = store.getState();
  if (currentBodegaState.catMood === 'Neutral') {
    console.log('I should pet the bodega cat!');
  } else {
    console.log('What a happy bodega cat!');
  };
};

store.subscribe(stateListener);
