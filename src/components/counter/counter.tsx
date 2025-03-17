
import { useCountReducerContext } from "../../context/countercontext";
import "../counter.scss"

export default function Counter() {
  const { state, dispatch } = useCountReducerContext();

  return (
    <div className="counter">
      <h2>Counter: {state.count}</h2>
      <div>
        <button onClick={() => dispatch({ type: "Increment", payload: 1 })} className="btn">
        Add
        </button>
        <button onClick={() => dispatch({ type: "Decrement", payload: 1 })} className="btn">
        Subtract
        </button>
        <button onClick={() => dispatch({ type: "Reset" })} className="btn">
        Reset
        </button>
      </div>
    </div>
  );
}
