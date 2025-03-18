import "./App.scss";
import Counter from "./components/counter/counter";
import ThemeToggle from "./components/thema/theme";
import CountReducerContextProvider from "./context/countercontext";

export default function App() {
  return<>
  <CountReducerContextProvider>
<Counter />
<ThemeToggle />
  </CountReducerContextProvider>
</>
};