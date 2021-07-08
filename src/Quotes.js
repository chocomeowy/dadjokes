import React, { useEffect, useState } from "react";

const Quotes = () => {
  const [quote, setQuote] = useState();
  const [changeQuote, setChangeQuote] = useState();

  useEffect(() => {
    async function randomQuote() {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      //console.log(`${data.content} —${data.author}`);
      setQuote(data);
    }
    randomQuote();
  }, [changeQuote]);

  const changingQuote = () => {
    setChangeQuote(quote);
  };

  return (
    <>
      <h3>{quote?.content}</h3>
      <div>{quote?.author}</div>
      <button onClick={changingQuote}>New Quotes with async await</button>
    </>
  );
};

export default Quotes;
