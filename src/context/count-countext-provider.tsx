import { createContext, useContext, useEffect, useMemo, useReducer } from 'react';

interface CountContextType {
  count: number
  changeCount: () => null
}

const countContext = createContext({} as CountContextType);

const initialState = {
  count: 0,
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
  const [state, dispatch] = useReducer(reducer, initialState);

  function changeCount() {
    dispatch({ type: 'changeCount' });
  }

  // useEffect(() => {
  //   setInterval(() => {
  //     changeCount()
  //   }, 1000);
  // }, [])

  const countProps = useMemo(
    () => ({
      ...state,
      changeCount
    }),
    [state, changeCount]
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
