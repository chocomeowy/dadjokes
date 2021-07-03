import "./App.css";
import DadJokes from "./DadJokes";
import Quotes from "./Quotes";
import Advice from "./Advices";

function App() {
  return (
    <div className="App">
      <Advice />
      <Quotes />
      <h1>Welcome to Dad Jokes</h1>
      <DadJokes />
    </div>
  );
}

export default App;
