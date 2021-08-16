import React from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";

import "../02-useEffect/effects.css";

export const MultipleCustomHooks = () => {

  const {counter, increment} = useCounter(1);

  const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
  
  const {author, quote} = !!data && data[0];//si tenemos data entonces extraemos data en la posicion cero
  console.log(author, quote);
  return (
    <div>
      <div>
        <h1>The Breaking Bad Quotes</h1>
        <hr/>

        {
          loading 
          ?
            (
              <div className="alert alert-info text-center">
                Loading...
              </div>
            )
          :
            (
              <div className="blockquote text-right">
                <p className="mb-2">{quote}</p>
                <footer className="blockquote-footer"> {author} </footer>
              </div>
            )
        }

        <button 
          className="btn btn-primary"
          onClick={increment}
        >
          
          Next quote
        </button>
      </div>
    </div>
  );
};
