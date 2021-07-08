import React from "react";
import { useEffect, useState } from "react";

const Advice = () => {
  const [quote, setQuote] = useState();
  const [changeQuote, setChangeQuote] = useState();

  const url = "https://api.adviceslip.com/advice";

  useEffect(() => {
    const getAdvice = () => {
      fetch(url)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Bad Response from Server");
        })
        .then((data) => {
          setQuote(data);
          //console.log(data);
        })
        .catch((error) => {
          setQuote(error);
        });
    };
    getAdvice();
  }, [changeQuote]);

  const changingQuote = () => {
    setChangeQuote(quote);
  };
  return (
    <>
      <h3>{quote?.slip?.advice}</h3>

      <button onClick={changingQuote}>New Advice with fetch</button>
    </>
  );
};

export default Advice;
