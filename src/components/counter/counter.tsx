
import { useCountReducerContext } from "../../context/countercontext";

export default function Counter() {
  const { state, dispatch } = useCountReducerContext();

  return (
    <div>
      <h2>Counter: {state.count}</h2>
      <div>
        <button onClick={() => dispatch({ type: "Increment", payload: 1 })}>
        Add
        </button>
        <button onClick={() => dispatch({ type: "Decrement", payload: 1 })}>
        Subtract
        </button>
        <button onClick={() => dispatch({ type: "Reset" })}>
        Reset
        </button>
      </div>
    </div>
  );
}
