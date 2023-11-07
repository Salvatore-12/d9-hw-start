const oneState = {
    list: {
      content: [],
    },
  };
  
  const mainReducer = (state = oneState, action) => {
    switch (action.type) {
      case "ADD_TO_LIST":
        return {
          ...state,
          list: {
            ...state.list,
            content: [...state.list.content, action.payload],
          },
        };
  
      default:
        return state;
    }
  };
  
  export default mainReducer;