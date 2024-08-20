import { createContext, useContext, useEffect, useMemo, useReducer, useCallback } from 'react';

interface CountContextType {
  date?: Date
}

const countContext = createContext({} as CountContextType);

const initialState = {
  date: null
};

const reducer = (state: any, action: any) => {
  switch (action?.type) {
    case 'changeCount':
      return {
        ...state,
        count: state.count + 1 === 10 ? 0 : state.count + 1
      };

    default:
      return state;
  }
};

export const CountContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState, (initialState) => {
    return {
      ...initialState,
      date: new Date(2024, 10, 10, 10, 10, 10)
    }
  });


  function changeCount() {
    dispatch({ type: 'changeCount' });
  }

  const countProps = useMemo(
    () => ({
      ...state,
    }),
    [state]
  );

  return (
    <countContext.Provider value={countProps}>
      {children}
    </countContext.Provider>
  );
};

export function useCountContext() {
  const context = useContext(countContext);
  return context;
}
