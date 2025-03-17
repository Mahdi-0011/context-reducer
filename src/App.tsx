import "./App.scss";
import Counter from "./components/counter/counter";
import CountReducerContextProvider from "./context/countercontext";

export default function App() {
  return<>
  <CountReducerContextProvider>
<Counter />
</CountReducerContextProvider>
</>
};