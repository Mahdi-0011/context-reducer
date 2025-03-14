import React, { createContext, Dispatch, useContext, useMemo, useReducer } from "react";

type CounterState = {
  count: number;
};

type CounterAction =
  | { type: "Increment"; payload: number }
  | { type: "Decrement"; payload: number }
  | { type: "Reset" };

function counterReducer(state: CounterState, action: CounterAction): CounterState {
  switch (action.type) {
    case "Increment":
      return { count: state.count + action.payload };
    case "Decrement":
      return { count: state.count - action.payload };
    case "Reset":
      return { count: 0 };
    default:
      return state;
  }
}

type CountReducerContextType = {
  state: CounterState;
  dispatch: Dispatch<CounterAction>;
};

const CountReducerContext = createContext<CountReducerContextType | undefined>(undefined);
export const useCountReducerContext = (): CountReducerContextType => {
	const context = useContext(CountReducerContext);

	if (!context) {
		throw new Error(
			"useAnotherCountContext must be used within the provider"
		);
	}
	return context;
};

type CounterReducerContextProviderProps = {
  children: React.ReactNode;
};

export default function CountReducerContextProvider({
  children,
}: Readonly<CounterReducerContextProviderProps>) {
  const initialState: CounterState = { count: 0 };
  const [state, dispatch] = useReducer(counterReducer, initialState);

  const value = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <CountReducerContext.Provider value={value}>
      {children}
    </CountReducerContext.Provider>
  );
}
