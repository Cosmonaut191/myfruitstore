const initialState = {
  fruitData: [
    {
      fruit: "Apple",
      description: "An apple a day keeps the doctor away",
      by: "Sushil",
      date: new Date()
    }
  ],
  disable: true,
  screen: 1
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_DATA":
      action.event.preventDefault();
      return {
        ...state,
        fruitData: [...state.fruitData, action.data],
        disable: false
      };
    case "SET_SCREEN":
      return {
        ...state,
        screen: action.data
      };

    default:
      return state;
  }
};

export default reducer;
