import * as React from "react";
import { useEffect, useState } from "react";

const DadJokes = () => {
  const [joke, setJoke] = useState();
  const [changejoke, setChangejoke] = useState();
  const [jokelist, setJokelist] = useState([]);
  const [jokeNum, setJokeNum] = useState(0);
  useEffect(() => {
    const url = "https://icanhazdadjoke.com/";
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        //console.log("data", data);
        setJoke(data);
      });
  }, [changejoke]);

  const changeJoke = () => {
    setChangejoke(joke);
    setJokelist((newArr) => [...newArr, joke?.joke]);

    if (jokelist.length > 9) {
      jokelist.shift();
    }
    // console.log(jokelist);
  };

  const nextJoke = () => {
    jokeNum === jokelist.length - 1 ? setJokeNum(0) : setJokeNum(jokeNum + 1);
  };

  const prevJoke = () => {
    jokeNum === 0 ? setJokeNum(jokelist.length - 1) : setJokeNum(jokeNum - 1);
  };

  return (
    <>
      <h3>{joke?.joke}</h3>

      <button onClick={changeJoke}>Give me a new joke</button>
      <h1>Old Jokes...</h1>
      <h5>{jokelist[jokeNum]}</h5>
      <button onClick={nextJoke}>Next Jokes</button>
      <button onClick={prevJoke}>Prev Jokes</button>
      <br></br>
      <br></br>
      <ol>
        {jokelist.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </>
  );
};

export default DadJokes;
