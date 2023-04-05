import "./styles/global.css";

import { Habit } from "./components/Habit";

function App() {
  return (
    <div>
      <Habit completed={0} />
      <Habit completed={21} />
      <Habit completed={31} />
    </div>
  );
}

export default App;
