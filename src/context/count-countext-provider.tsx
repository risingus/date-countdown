import { createContext, useContext, useEffect, useMemo, useReducer, useCallback } from 'react';

interface CountContextType {
  count: number
  handleChangeCount: () => null
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

  const handleChangeCount = useCallback(() => {
    return changeCount()
  }, [])

  function changeCount() {
    dispatch({ type: 'changeCount' });
  }

  // useEffect(() => {
  //   setInterval(() => {
  //     // if (refCount.current === count) return
  //     handleChangeCount()
  //   }, 1000);
  // }, [handleChangeCount])


  const countProps = useMemo(
    () => ({
      ...state,
      handleChangeCount
    }),
    [state, handleChangeCount]
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
