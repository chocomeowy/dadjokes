import React from "react";
import { useEffect, useState } from "react";

const Advice = () => {
  const [quote, setQuote] = useState();
  const [changeQuote, setChangeQuote] = useState();
  const options = {
    method: "GET",
    mode: "no-cors",
  };

  useEffect(() => {
    async function randomQuote() {
      const response = await fetch("https://www.affirmations.dev/", {
        options,
      });
      const data = await response.json();
      console.log(`${data.affirmation}`);
      //setQuote(data);
    }
    randomQuote();
  }, [changeQuote]);

  const changingQuote = () => {
    setChangeQuote(quote);
  };
  return (
    <>
      <div>{quote}</div>
      <button onClick={changingQuote}>New Quotes</button>
    </>
  );
};

export default Advice;
