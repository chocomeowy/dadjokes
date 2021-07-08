import "./App.css";
import DadJokes from "./DadJokes";
import Quotes from "./Quotes";
import Advice from "./Advices";
import WeatherForecast from "./WeatherForecast";

function App() {
  return (
    <div className="App">
      <WeatherForecast />
      <Advice />
      <Quotes />
      <h1>Welcome to Dad Jokes</h1>
      <DadJokes />
    </div>
  );
}

export default App;
