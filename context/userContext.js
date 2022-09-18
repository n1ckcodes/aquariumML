import React, { useReducer, createContext } from "react";

export const UserContext = createContext();

const initialState = {
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return true;

    default:
      throw new Error();
  }
};

export const UserContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={[state, dispatch]}>
      {props.children}
    </UserContext.Provider>
  );
};
